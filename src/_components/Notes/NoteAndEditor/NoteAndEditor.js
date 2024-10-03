import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Notes from "_modules/notes/_components/Notes";

import NotesEditor from "../NotesEditor/NotesEditor";
import { convertToHTML } from "_modules/markdownEditor/_utils/markdownConvert";

import * as notesModel from "_services/notes.service";
import { Button } from "_components/Form";
import { removeNoteFromTabs, saveNote, setCurrentNote, setIsNoteAdding, updateNote } from "store/actions/notesActions";
import { getBlankNote, getSelectedFile, getSelectedFolder, getSelectedNote } from "store/selectors/notesSelectors";
import Separator from "_components/Misc/Separator/Separator";
import { TabItem, Tabs } from "_components/UI/Tabs/Tabs";
import FileTabManager from "_modules/notes/_components/fileTabManager/FileTabManager";


const OpenedFile = ({ item, selectedId, note, onDelete, onClick }) => {
    const isSelected = selectedId === item;
    const { title } = note;
    return (
        <div onClick={(e) => onClick(item, e)} className={`flex items-center group-hover text-xs py-2 rounded-md cursor-pointer ${isSelected ? 'bg-another text-default' : 'bg-default text-secondary hover-text-default hover-another'}`}>
            <span className="ml-2" title="Path here">{title}</span>
            <span onClick={(e) => onDelete(item, e)} className={`flex cursor-pointer mx-2 bg-transparent text-default border hover-text-destructive hover-border-destructive rounded-md ${isSelected ? '' : 'invisible group-hover-item'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </span>
        </div>
    )
}

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

    const notesTab = useSelector(state => state.notes.notesTab);
    const notesObj = useSelector(state => state.notes.normalisedHierarchyData.notes);

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
        if(!folderId || !fileId){
            alert('Show toast of no valid note')
            return;
        }
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

    const handleSelectNote = async (item, e) => {
        e.stopPropagation();
        dispatch(setCurrentNote(item, true));
    }

    const handleDeleteNote = async (item, e) => {
        e.stopPropagation();
        const noteIndex = notesTab.findIndex(note => note === item);

        const currentTabs = await dispatch(removeNoteFromTabs(item));

        if(!currentTabs.length){
            dispatch(setIsNoteAdding(false));
            return;
        }

        if(!currentTabs.includes(id)){
            let nextItem;
            if(noteIndex > 0){
                nextItem = notesTab[noteIndex - 1];   
            }else{
                nextItem = notesTab[noteIndex + 1];   
            }
            handleSelectNote(nextItem, e)
        }
    }

    useEffect(() => {
        setIsEditing(isEditMode);
    }, [isEditMode])

    return (
        <div className="m-3">
            {/* <div className="rounded-lg"> */}
                
                <FileTabManager selectedItem={id} />

                <div className="flex rounded-lg px-2 my-2 text-xs bg-default text-secondary">
                    {(!folderName || !fileName) && <span className="text-destructive rounded-md mr-2 px-2">deleted</span>}
                    <span>{folderName}</span>
                    <span className="flex items-center text-default mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                    <span>{fileName}</span>
                    <span className="flex items-center text-default mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                    <span className="text-default">{noteTitle}</span>
                </div>
            {/* </div> */}

            {isEditing ? (
                <NotesEditor
                    key={id}
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