import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Separator from "_components/Misc/Separator/Separator";
import { arrowIcons } from "../_utils/mockData";
import ContextMenu from "_components/UI/ContextMenu/ContextMenu";
import NoteOptionsMenu from "_modules/notes/_components/noteOptionsMenu/NoteOptionsMenu";


import { getSelectedFile, getSelectedFolder, getSelectedNote } from "store/selectors/notesSelectors";
import { setCurrentFile, setCurrentFolder, setCurrentNote } from "store/actions/notesActions";
import Typography from "_components/Misc/Typography/Typography";
import { useFolderCrud, useFilesCrud } from "../_hooks";
import FolderComponent from "./FolderComponent";


const FolderStructure = (props) => {
    const { normalisedData_old = {}, selectedFile, selectedNote, setSelectedFile, setSelectedNote, onFolderDelete } = props;

    const normalisedData = useSelector(state => state.notes.normalisedHierarchyData);

    const { id: currentFolderId, currentFolder } = useSelector(getSelectedFolder) || {};
    const { id: currentFileId, currentFile } = useSelector(getSelectedFile) || {};
    const { id: currentNoteId, currentNote } = useSelector(getSelectedNote) || {};

    const dispatch = useDispatch();

    const [selectedFolder, setSelectedFolder] = useState()
    const [expandedFolders, setExpandedFolders] = useState({ [currentFolderId]: true });
    const [expandedFiles, setExpandedFiles] = useState({ [currentFileId]: true });

    const { showCreateDialog, showUpdateDialog, showDeleteDialog } = useFolderCrud();

    const { folders: normalizedFolders = {}, files: normalizedFiles = {}, notes: normalizedNotes = {} } = normalisedData;

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



    const expandAllFiles = () => {
        const fileIds = Object.keys(normalizedFiles).reduce((acc, fileId) => ({ ...acc, [fileId]: true }), {});
        setExpandedFiles(fileIds)
    }

    const expandAllFolders = () => {
        const folderIds = Object.keys(normalizedFolders).reduce((acc, folderId) => ({ ...acc, [folderId]: true }), {});
        setExpandedFolders(folderIds)
    }

    const expandAll = () => {
        expandAllFolders();
        expandAllFiles();
    }


    const collapseAllFiles = () => {
        const fileIds = Object.keys(normalizedFiles).reduce((acc, fileId) => ({ ...acc, [fileId]: false }), {});
        setExpandedFiles(fileIds)
    }

    const collapseAllFolders = () => {
        const folderIds = Object.keys(normalizedFolders).reduce((acc, folderId) => ({ ...acc, [folderId]: false }), {});
        setExpandedFolders(folderIds)
    }

    const collapseAll = () => {
        collapseAllFolders();
        collapseAllFiles();
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
                    <div className="flex items-center">
                        <span className="flex ml-2 text-secondary hover-text-default cursor-pointer" onClick={collapseAll}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fold-vertical"><path d="M12 22v-6" /><path d="M12 8V2" /><path d="M4 12H2" /><path d="M10 12H8" /><path d="M16 12h-2" /><path d="M22 12h-2" /><path d="m15 19-3-3-3 3" /><path d="m15 5-3 3-3-3" /></svg>
                        </span>
                        <span className="flex ml-2 text-secondary hover-text-default cursor-pointer" onClick={expandAll}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-unfold-vertical"><path d="M12 22v-6" /><path d="M12 8V2" /><path d="M4 12H2" /><path d="M10 12H8" /><path d="M16 12h-2" /><path d="M22 12h-2" /><path d="m15 19-3 3-3-3" /><path d="m15 5-3-3-3 3" /></svg>
                        </span>
                        <span className="flex ml-2 text-secondary hover-text-default cursor-pointer" onClick={showCreateDialog}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                        </span>
                    </div>
                </div>
                {Object.keys(normalizedFolders).map((id) => {
                    const folder = normalizedFolders[id];
                    const { files, ...folderData } = folder;
                    // const files = normalizedFiles; // only sent the files in the array of folder
                    return (
                        <React.Fragment
                            key={`folder_fragment_${id}`}
                        >
                            <FolderComponent
                                key={`folder_${id}`}
                                folder={folderData}
                                files={files}
                                normalizedFiles={normalizedFiles}
                                normalizedNotes={normalizedNotes}
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