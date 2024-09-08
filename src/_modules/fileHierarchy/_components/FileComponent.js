import React, { useState } from "react";

import NoteOptionsMenu from "_modules/notes/_components/noteOptionsMenu/NoteOptionsMenu";

import { arrowIcons } from "../_utils/mockData";
import NoteComponent from "./NoteComponent";
import useNotesCrud from "../_hooks/useNotesCrud";

const FileComponent = ({ folderId, file, folder, notes, normalizedNotes, isExpanded, toggleFile, toggleNote, selectedNote, onFileDelete, onFileEdit }) => {
    const { id, label } = file;

    const [isHidden, setIsHidden] = useState(0);

    const { setNoteCreate, showUpdateDialog, showDeleteDialog } = useNotesCrud(folderId, id);


    const onNoteDelete = (fileId, option, e) => {
        showDeleteDialog(fileId, folderId, option, e)
    }

    const onNoteCreate = () => {
        const { label } = folder;
        setIsHidden((prev) => prev + 1);
        setNoteCreate({ folderName: label }, label)
    }

    const onNoteEdit = (id, option, e) => {
        setIsHidden((prev) => prev + 1);
        toggleNote(id);
    }

    return (
        <div className={`flex text-sm text-default cursor-pointer`}>
            <div className={`flex item-center mt-0 py-1 pr-2 justify-between w-full  duration-300 hover-text-default group-hover ${isExpanded ? 'text-default bg-highlights rounded-md' : 'text-secondary'}`} onClick={() => toggleFile(id)}>
                <div className="flex">
                    <span className='flex items-center mr-2'>
                        {arrowIcons[isExpanded]}
                    </span>
                    <span>{label}</span>
                </div>

                <NoteOptionsMenu
                    id={id}
                    item={file}
                    isHidden={isHidden}
                    onDelete={onFileDelete}
                    onCreate={onNoteCreate}
                    onEdit={onFileEdit}
                />
            </div>

            {isExpanded && <div className='ml-4 w-full'>
                {notes.map((noteId) => {
                    const note = normalizedNotes[noteId];

                    return (
                        <NoteComponent
                            key={note.id}
                            note={note}
                            isHidden={isHidden}
                            toggleNote={toggleNote}
                            selectedNote={selectedNote}
                            onNoteDelete={onNoteDelete}
                            onNoteEdit={onNoteEdit}
                        />
                    )
                }
                )}
            </div>}

        </div>
    )
}

export default FileComponent;