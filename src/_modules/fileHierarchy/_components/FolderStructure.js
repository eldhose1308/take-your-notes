import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Separator from "_components/Misc/Separator/Separator";
import { arrowIcons } from "../_utils/mockData";
import ContextMenu from "_components/UI/ContextMenu/ContextMenu";
import NoteOptionsMenu from "_modules/notes/_components/noteOptionsMenu/NoteOptionsMenu";


import { getHierarchyData, getSelectedFile, getSelectedFolder, getSelectedNote } from "store/selectors/notesSelectors";
import { setCurrentFile, setCurrentFolder, setCurrentNote } from "store/actions/notesActions";
import Typography from "_components/Misc/Typography/Typography";
import { useFolderCrud, useFilesCrud } from "../_hooks";
import FolderComponent from "./FolderComponent";


const FolderStructure = (props) => {
    const { normalisedData, selectedFile, selectedNote, setSelectedFile, setSelectedNote, onFolderDelete } = props;
    const { folders: normalizedFolders, files: normalizedFiles, notes: normalizedNotes } = normalisedData;

    const folders = useSelector(getHierarchyData);

    const { id: currentFolderId, currentFolder } = useSelector(getSelectedFolder) || {};
    const { id: currentFileId, currentFile } = useSelector(getSelectedFile) || {};
    const { id: currentNoteId, currentNote } = useSelector(getSelectedNote) || {};

    const dispatch = useDispatch();

    const [selectedFolder, setSelectedFolder] = useState()
    const [expandedFolders, setExpandedFolders] = useState({ [currentFolderId]: true });
    const [expandedFiles, setExpandedFiles] = useState({ [currentFileId]: true });

    const { showCreateDialog, showUpdateDialog, showDeleteDialog } = useFolderCrud();


    const onFolderSelect = (id) => {
        setSelectedFolder(id);
    }

    const onFileSelect = (id) => {
        const { folderId } = normalizedFiles[id]
        setSelectedFolder(folderId);
    }

    const onNoteSelect = async (id) => {
        const { fileId } = normalizedNotes[id];
        const { folderId } = normalizedFiles[fileId];

        if (currentFolderId !== folderId) {
            await dispatch(setCurrentFolder(folderId, true));
            // onFolderChange(folderId);
        }

        if (currentFileId !== fileId) {
            await dispatch(setCurrentFile(fileId, true));
            // await onFileChange(fileId, folderId, true);
        }

        dispatch(setCurrentNote(id, true));

    }


    useEffect(() => {
        setExpandedFolders(previousState => ({ ...previousState, [currentFolderId]: true }))
    }, [currentFolderId])

    useEffect(() => {
        setExpandedFiles(previousState => ({ ...previousState, [currentFileId]: true }))
    }, [currentFileId])

    const toggleFolder = (folderId) => {
        if (!expandedFolders[folderId]) {
            onFolderSelect(folderId)
        }
        setExpandedFolders((prev) => ({
            ...prev,
            [folderId]: !prev[folderId]
        }));
    };

    const toggleFile = (fileId) => {
        if (!expandedFiles[fileId]) {
            onFileSelect(fileId)
        }
        setExpandedFiles((prev) => ({
            ...prev,
            [fileId]: !prev[fileId]
        }));
    };

    return (
        <>
            <div className=''>
                <div className="flex items-center justify-between my-2">
                    <Typography>Explorer</Typography>
                    <span className="flex text-secondary hover-text-default cursor-pointer" onClick={showCreateDialog}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                    </span>
                </div>
                {folders.map((folder) => {
                    const { id } = folder;
                    return (
                        <React.Fragment
                            key={`folder_fragment_${id}`}
                        >
                            <FolderComponent
                                key={`folder_${id}`}
                                folder={folder}
                                expandedFiles={expandedFiles}
                                isExpanded={!!expandedFolders[id]}
                                toggleFolder={toggleFolder}
                                toggleFile={toggleFile}
                                toggleNote={onNoteSelect}
                                selectedFile={currentFileId}
                                selectedNote={currentNoteId}
                                onFolderDelete={showDeleteDialog}
                                onFolderEdit={showUpdateDialog}
                            />
                            <Separator />
                        </React.Fragment>
                    )
                })}
            </div>
        </>
    )
}

export default FolderStructure