import React, { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";

import FolderStructure from "_modules/fileHierarchy/_components/FolderStructure";

import foldersMock from '../../fileHierarchy/_utils/mockData';
import { normalizeData } from '../../fileHierarchy/_utils/normalizer';
import CreateNoteButton from "./CreateNoteButton";
import NotesControls from "./notesControls/NotesControls";
import { getSelectedFile, getSelectedFolder, getSelectedNote } from "store/selectors/notesSelectors";
import { setCurrentFile, setCurrentFolder, setCurrentNote } from "store/actions/notesActions";


const ExplorerView = (props) => {
    const { isActive, hierarchyData=[], onFolderChange, onFileChange } = props;
    const dispatch = useDispatch();

    const { id: currentFolderId, currentFolder } = useSelector(getSelectedFolder) || {};
    const { id: currentFileId, currentFile } = useSelector(getSelectedFile) || {};
    const { id: currentNoteId, currentNote } = useSelector(getSelectedNote) || {};


    // const hierarchyData = 

    const { folders: normalizedFolders, files: normalizedFiles, notes: normalizedNotes } = normalizeData(hierarchyData)

    const [selectedFolder, setSelectedFolder] = useState()
    const [selectedFile, setSelectedFile] = useState()
    const [selectedNote, setSelectedNote] = useState()



    const onSelectFolder = (id) => {
        // dispatch(setCurrentFolder(id, true));
        // onFolderChange(id);
        setSelectedFolder(id);
        // setSelectedFile(null);
        // setSelectedNote(null);
    }

    const onSelectFile = (id) => {
        const { folderId } = normalizedFiles[id]
        // dispatch(setCurrentFile(id, true));
        // onFileChange(id, folderId);
        setSelectedFolder(folderId);
        // setSelectedFile(id);
        // setSelectedNote(null);
    }

    const onSelectNote = async (id) => {
        const { fileId } = normalizedNotes[id];
        const { folderId } = normalizedFiles[fileId];

        if(currentFolderId !== folderId){
            await dispatch(setCurrentFolder(folderId, true));
            onFolderChange(folderId);
        }

        if(currentFileId !== fileId){
            await dispatch(setCurrentFile(fileId, true));
            await onFileChange(fileId, folderId, true);
        }

        dispatch(setCurrentNote(id, true));

        // setSelectedFolder(folderId);
        // setSelectedFile(fileId);
        // setSelectedNote(id);
    }



    if (!isActive) {
        return null;
    }

    return (
        <React.Fragment>
            <div className={`${isActive ? '' : 'hidden'}`}>
                <Typography textVariant='default' variant='muted' size='sm'>
                    /
                    {/* {selectedFolder && `${normalizedFolders[selectedFolder].label} /`}
                    {selectedFile && `${normalizedFiles[selectedFile].label} /`}
                    {selectedNote && `${normalizedNotes[selectedNote].title}`} */}
                </Typography>


                <NotesControls />

                <CreateNoteButton />


                <Separator />

                <div className='overflow-scroll my-2 pr-4 h-screen-3/4'>
                    <FolderStructure 
                        folders={hierarchyData} 
                        selectedFolder={currentFolderId}
                        selectedFile={currentFileId}
                        selectedNote={currentNoteId}
                        setSelectedFolder={onSelectFolder} 
                        setSelectedFile={onSelectFile} 
                        setSelectedNote={onSelectNote} 
                    />
                </div>
            </div>
        </React.Fragment>

    )
}

export default ExplorerView;