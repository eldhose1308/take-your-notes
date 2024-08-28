import React from "react";
import { useDispatch } from 'react-redux';

import NoteOptionsMenu from "../noteOptionsMenu/NoteOptionsMenu";
import { confirmDeleteBox } from "store/actions/modalActions";
import { deleteNote } from "store/actions/notesActions";

const NoteGridItem = (props) => {
    const { id, item, folder, file, handleNoteSelect, isSelectedItem } = props;
    const { title, content } = item;

    const dispatch = useDispatch();

    const handleSelect = () => {
        handleNoteSelect(id)
    }



    const handleDelete = async (id) => {
        if (!id) { return }

        const { id: folderId } = folder;
        const { id: fileId } = file;
        try {
            await dispatch(deleteNote({ noteId: id, folderId, fileId }));
            return true;
        } catch (err) {
            throw err;
        }

    }

    const showDeleteDialog = (id, option, e) => {
        e.stopPropagation();
        const confirmBoxData = {
            id,
            status: true,
            onClick: handleDelete
        }
        dispatch(confirmDeleteBox(confirmBoxData))
    }
    
    return (
        <div onClick={handleSelect} className={`text-xs text-default rounded-md my-2 px-2 py-2 max-h-md cursor-pointer group-hover ${isSelectedItem ? 'bg-highlight' : 'hover-custom'}`}>
            <div className='flex justify-between'>
                <h3 className='my-1'>{title}</h3>
                <NoteOptionsMenu   
                    id={id}
                    item={item} 
                    onDelete={showDeleteDialog}
                    onEdit={() => console.log('Edit')}
                />
            </div>
            <span className='flex max-h-xs overflow-hidden'>
                {content}
            </span>

            <div className='flex justify-between mt-4'>
                <span className='text-secondary'>
                    Wednesday
                </span>
                <span className='text-secondary'>
                    2:35 pm
                </span>
            </div>
        </div>
    )
}

export default NoteGridItem;