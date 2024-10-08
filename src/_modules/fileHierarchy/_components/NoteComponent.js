import React, { useEffect, useRef } from "react";
import NoteOptionsMenu from "_modules/notes/_components/noteOptionsMenu/NoteOptionsMenu";

const NoteComponent = ({ note, isHidden, toggleNote, selectedNote, onNoteEdit, onNoteDelete }) => {
    const { id, title } = note;
    const isSelected = selectedNote === id;

    const noteRef = useRef({});

    useEffect(() => {
        // if(isSelected){
        //     noteRef.current.scrollIntoView({ behavior: 'smooth' });
        //     console.log('Scroll', noteRef.current)
        // }
    },[isSelected])

    return (
        <div ref={noteRef} key={id} className={`flex my-0 ml-6 py-1 pr-2 text-sm text-default cursor-pointer duration-300 hover-text-default ${isSelected ? 'text-default bg-highlights rounded-md' : 'text-secondary'}`}>
            <div className='flex items-center justify-between w-full group-hover' onClick={() => toggleNote(id)}>
                <div className="flex">
                    <span className='flex items-center mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 15L15 20.996L4.00221 21C3.4487 21 3 20.5551 3 20.0066V3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.45576 21 4.00247V15ZM19 5H5V19H13V14C13 13.4872 13.386 13.0645 13.8834 13.0067L14 13L19 12.999V5ZM18.171 14.999L15 15V18.169L18.171 14.999Z"></path></svg>
                    </span>
                    <span>{title}</span>
                </div>
                <NoteOptionsMenu
                    id={id}
                    item={note}
                    isHidden={isHidden}
                    onDelete={onNoteDelete}
                    onEdit={onNoteEdit}
                />
            </div>

        </div>
    )
}

export default NoteComponent;