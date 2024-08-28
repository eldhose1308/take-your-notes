import React from "react"
import { useSelector } from 'react-redux';

import CommandCenter from "./CommandCenter";
import NoteAndEditor from "_components/Notes/NoteAndEditor/NoteAndEditor";

const NoteDisplayManager = () => {
    const isNoteAdding = useSelector(state => state.notes.isNoteAdding);
    const currentNote = useSelector(state => state.notes.currentNote);
    const { id: selectedNoteId } = currentNote || {};

    return (
        <React.Fragment>
            {!isNoteAdding && !selectedNoteId ? (
                <CommandCenter />
            ) : (
                <div className="flex">
                    <div className='w-full px-3 mr-3'>
                        <NoteAndEditor key={selectedNoteId} id={selectedNoteId} />
                    </div>
                </div>)}
        </React.Fragment>
    )
}

export default NoteDisplayManager;