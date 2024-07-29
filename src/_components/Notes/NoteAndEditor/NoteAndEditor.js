import React, { useState, useEffect } from "react";

import Notes from "_modules/notes/_components/Notes";

import NotesEditor from "../NotesEditor/NotesEditor";
import { convertToHTML } from "_modules/markdownEditor/_utils/markdownConvert";

import * as notesModel from "_services/notes.service";
import { Button } from "_components/Form";


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

    
    const [note, setNote] = useState(initialNoteMetaDetails)
    const { content, ...noteMeta } = note

    const [isEditing, setIsEditing] = useState(isEditMode)
    const [noteMetaDetails, setNoteMetaDetails] = useState(noteMeta)
    
    const convertedHtmlContent = convertToHTML(content)
    
    const handleAdd = async (note) => {
        const notesResponse = await notesModel.saveNotes(note)
        // const newNoteListForState = [...notesList, notesResponse]
        // setNotesList(newNoteListForState)
        // toggleAddCard()
    }

    const handleUpdate = async (note, id) => {
        const notesResponse = await notesModel.updateNotes(id, note)
        // const newNoteListForState = notesList.map(item => {
        //     if (item.id === id) {
        //         return { id, ...notesResponse }
        //     }
        //     return item
        // })
        // setNotesList(newNoteListForState)
    }

    const handleSave = (content) => {
        exitEditMode()
        const allNoteData = { ...note, ...noteMetaDetails, content }
        const { id: _, ...noteData } = allNoteData
        id ? handleUpdate(noteData, id) : handleAdd(allNoteData)
    }


    useEffect(() => {
        async function fetchData() {
            const notes = await notesModel.getNoteById(id)
            setNote(notes)
        }
        fetchData();
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
            {/* <div>
                <div>
                    <span className={`${isEditing ? 'bg-custom' : ''}`}>Raw</span>
                    <span className={`${isEditing ? '' : 'bg-custom'}`}>Preview</span>
                </div>
            </div> */}
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
                    onHighLight={handleHighlightNote}
                />}
        </div>
    )
}

export default NoteAndEditor