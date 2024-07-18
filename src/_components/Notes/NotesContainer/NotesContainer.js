import React, { useState, useEffect } from "react";
import NotesWithEditor from "../NotesWithEditor/NotesWithEditor";

import * as notesModel from "_services/notes.service";


const NotesContainer = (props) => {
    const [notesList, setNotesList] = useState([])
    const [isAddCardVisible, setisAddCardVisible] = useState(false)
    const [activeNote, setActiveNote] = useState()

    const toggleAddCard = () => {
        setisAddCardVisible(!isAddCardVisible)
    }

    const handleAdd = async (note) => {
        const notesResponse = await notesModel.saveNotes(note)
        const newNoteListForState = [...notesList, notesResponse]
        setNotesList(newNoteListForState)
        toggleAddCard()
    }

    const handleUpdate = async (note, id) => {
        const notesResponse = await notesModel.updateNotes(id, note)
        const newNoteListForState = notesList.map(item => {
            if (item.id === id) {
                return { id, ...notesResponse }
            }
            return item
        })
        setNotesList(newNoteListForState)
    }

    const handleSave = (note) => {
        const { id, ...noteData } = note
        id ? handleUpdate(noteData, id) : handleAdd(note)
    }

    const handleDelete = async (id) => {
        const notesResponse = await notesModel.deleteNote(id)
        const noteIndex = notesList.findIndex(({ id: noteId }) => noteId === id)
        const newNotes = notesList.slice(0, noteIndex).concat(notesList.slice(noteIndex + 1))

        setNotesList(newNotes)
    }

    const handleHighlightNote = (id) => {
        // const selectedNote = notesList.find(({ id: noteId }) => noteId === id)
        setActiveNote(id)
    }

    useEffect(() => {
        async function fetchData() {
            const notes = await notesModel.getNotes()
            setNotesList(notes)
        }
        fetchData();
    }, []);


    return (
        <React.Fragment>

            {isAddCardVisible ? (<NotesWithEditor isEditMode onSave={handleSave} onCancel={toggleAddCard} note={{ heading: 'Untitled_1232' }} />) : (
                <div className="bg-highlight hover-another my-4 p-3 rounded-lg cursor-pointer opacity-50" onClick={toggleAddCard}>
                    <span className="text-sm">Start typing / Click to create a new note</span>
                </div>
            )}

            {notesList.map((item, index) => {
                const { id } = item
                return (
                    <NotesWithEditor note={item} key={index} isActive={id === activeNote} onSave={handleSave} onDelete={handleDelete} onHighlight={handleHighlightNote} />
                )
            }
            )}
        </React.Fragment>
    )
}

export default NotesContainer