import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Notes from "_modules/notes/_components/Notes";

import NotesEditor from "../NotesEditor/NotesEditor";
import { convertToHTML } from "_modules/markdownEditor/_utils/markdownConvert";

import * as notesModel from "_services/notes.service";
import { Button } from "_components/Form";
import { saveNote, updateNote } from "store/actions/notesActions";
import { getBlankNote, getSelectedFile, getSelectedFolder, getSelectedNote } from "store/selectors/notesSelectors";


const initialNoteMetaDetails = {
    id: '',
    heading: '',
    link: '',
    content: '',
    icon: '',
    tags: [],
}
const NoteAndEditor = (props) => {
    const { id, isActive, onSave = () => { }, onCancel = () => { }, onDelete = () => { }, onHighlight = () => { }, isEditMode = false } = props
    const selectedNote = useSelector(getSelectedNote);
    const blankNote = useSelector(getBlankNote);
    const currentFolder = useSelector(getSelectedFolder);
    const currentFile = useSelector(getSelectedFile);

    const { id: folderId, label: folderName } = currentFolder || {};
    const { id: fileId, label: fileName } = currentFile || {};

    const note = selectedNote || blankNote;

    const dispatch = useDispatch();

    // const [note, setNote] = useState(initialNoteMetaDetails)
    const { content, ...noteMetaDetails } = note;
    const { title: noteTitle } = noteMetaDetails || {};

    const [isEditing, setIsEditing] = useState(isEditMode)
    const [noteMetaDetails__, setNoteMetaDetails] = useState(noteMetaDetails)

    const convertedHtmlContent = convertToHTML(content)

    const handleAdd = async (payload) => {
        const { label, value, noteId } = await dispatch(saveNote(payload));

        // const newNoteListForState = [...notesList, notesResponse]
        // setNotesList(newNoteListForState)
        // toggleAddCard()
    }

    const handleUpdate = async (payload, id) => {
        await dispatch(updateNote(payload, id));
    }

    const handleSave = (note) => {
        const { content, title } = note;

        const payload = {
            title,
            content,
            folderId: folderId,
            fileId: fileId,
        }
        id ? handleUpdate(payload, id) : handleAdd(payload)
        exitEditMode()
    }


    useEffect(() => {
        async function fetchData() {
            const notes = await notesModel.getNoteById(id)
            // setNote(notes)
        }
        // fetchData();


        // setNoteMetaDetails(noteMeta);

    }, [id]);

    // move to custom hook or reducer
    const handleNoteMetaChange = (key, value) => {
        setNoteMetaDetails(prev => ({ ...prev, [key]: value }));
    };

    const enterEditMode = () => {
        setIsEditing(true)
    }

    const exitEditMode = () => {
        setIsEditing(false)
    }


    // const handleSave = (content) => {
    //     exitEditMode()
    //     const allNoteData = { ...note, ...noteMetaDetails, content }
    //     onSave(allNoteData)
    // }

    const handleCancel = () => {
        exitEditMode()
        onCancel()
    }


    const handleHighlightNote = () => {
        onHighlight(id)
    }


    return (
        <div className="m-3">
            <div className="flex border px-1 py-2 text-sm text-secondary">
                <span>{folderName}</span>
                <span className="flex items-center text-default mx-1">
                    {/* • */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </span>
                <span>{fileName}</span>
                <span className="flex items-center text-default mx-1">
                    {/* • */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </span>
                <span className="text-default">{noteTitle}</span>
            </div>
            {isEditing ? (
                <NotesEditor
                    content={content}
                    noteMetaDetails={noteMetaDetails}
                    onSave={handleSave}
                    onCancel={handleCancel}
                    handleNoteMetaChange={handleNoteMetaChange}
                />
            )
                : <Notes
                    isActive={isActive}
                    htmlContent={convertedHtmlContent}
                    content={content}
                    noteMetaDetails={noteMetaDetails}
                    onEditClick={enterEditMode}
                    onCloseClick={() => alert('Close')}
                    onHighLight={handleHighlightNote}
                />}
        </div>
    )
}

export default NoteAndEditor