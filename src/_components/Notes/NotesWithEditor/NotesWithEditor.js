import React, { useState } from "react";

import Notes from "_modules/notes/_components/Notes";

import NotesEditor from "../NotesEditor/NotesEditor";
import { convertToHTML } from "_modules/markdownEditor/_utils/markdownConvert";

import * as notesModel from "_services/notes.service";


const initialNoteMetaDetails = {
    heading: '',
    link: '',
    icon: '',
    tags: [],
}
const NotesWithEditor = (props) => {
    const { isActive, note={}, onSave=()=>{}, onCancel=()=>{}, onDelete=()=>{}, onHighlight=()=>{}, isEditMode=false } = props

    const { id, content, ...noteMeta } = note

    const [isEditing, setIsEditing] = useState(isEditMode)
    const [noteMetaDetails, setNoteMetaDetails] = useState(noteMeta)

    const convertedHtmlContent = convertToHTML(content)


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

    const handleSave = (content) => {
        exitEditMode()
        const allNoteData = { ...note, ...noteMetaDetails, content }
        onSave(allNoteData)
    }

    const handleCancel = () => {
        exitEditMode()
        onCancel()
    }

    const handleDelete = () => {
        onDelete(id)
    }

    const handleHighlightNote = () => {
        onHighlight(id)
    }

    const CurrentComponent = isEditing ? (
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
            onDeleteClick={handleDelete}
            onHighLight={handleHighlightNote}
        />

    return (
        <div className="m-3">
            {CurrentComponent}
        </div>
    )
}

export default NotesWithEditor