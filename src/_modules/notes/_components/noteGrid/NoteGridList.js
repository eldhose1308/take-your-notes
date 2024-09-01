import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Separator from "_components/Misc/Separator/Separator";
import NoteGridItem from "./NoteGridItem";
import { getNotesAndSet, setCurrentNote } from "store/actions/notesActions";
import { getSelectedFile, getSelectedFolder, getSelectedNote } from "store/selectors/notesSelectors";

const NoteGridList = (props) => {
    const { notes: notesList = [] } = props;

    // const notesList = useSelector(state => state.notes.notesList);
    const currentFile = useSelector(getSelectedFile);
    const currentFolder = useSelector(getSelectedFolder);
    const { id: selectedNoteId } = useSelector(getSelectedNote) || {};

    const dispatch = useDispatch();

    const handleNoteSelect = (selectedId) => {
        // const selectedNote = notesList.find(({ id }) => id === selectedId);
        dispatch(setCurrentNote(selectedId));
    }

    // useEffect(() => {
    //     if(!currentFile || !Object.keys(currentFile).length){
    //         return
    //     }
    //     const { id: fileId } = currentFile;
    //     const { id: folderId } = currentFolder;
    //     dispatch(getNotesAndSet({ folderId, fileId }));
    // }, [currentFile])


    return (
        <div className='overflow-scroll my-2 pr-4 h-screen-3/4'>
            {notesList.map((item, index) => {
                const { id } = item
                const isSelectedItem = selectedNoteId === id
                return (
                    <React.Fragment key={`note_item_fragment_${id || index}`}>

                        <NoteGridItem
                            key={`note_item_${id || index}`}
                            id={id}
                            item={item}
                            folder={currentFolder}
                            file={currentFile}
                            isSelectedItem={isSelectedItem}
                            handleNoteSelect={handleNoteSelect}
                        />

                        <Separator />

                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default NoteGridList;