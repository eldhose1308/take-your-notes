import React, { useState, useMemo, useEffect } from "react";

import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";

import FolderStructure from "_modules/fileHierarchy/_components/FolderStructure";

import foldersMock from '../../fileHierarchy/_utils/mockData';
import { normalizeData } from '../../fileHierarchy/_utils/normalizer';
import CreateNoteButton from "./CreateNoteButton";
import NotesControls from "./notesControls/NotesControls";


const ExplorerView = (props) => {
    const { isActive, hierarchyData=[], } = props;
    // const hierarchyData = 

    const { folders: normalizedFolders, files: normalizedFiles, notes: normalizedNotes } = normalizeData(hierarchyData)

    const [selectedFolder, setSelectedFolder] = useState()
    const [selectedFile, setSelectedFile] = useState()
    const [selectedNote, setSelectedNote] = useState()



    const onSelectFolder = (id) => {
        setSelectedFolder(id);
        setSelectedFile(null);
        setSelectedNote(null);
    }

    const onSelectFile = (id) => {
        const { folderId } = normalizedFiles[id]
        setSelectedFolder(folderId);
        setSelectedFile(id);
        setSelectedNote(null);
    }

    const onSelectNote = (id) => {
        const { fileId } = normalizedNotes[id];
        const { folderId } = normalizedFiles[fileId];
        setSelectedFolder(folderId);
        setSelectedFile(fileId);
        setSelectedNote(id);
    }



    if (!isActive) {
        return null;
    }

    return (
        <React.Fragment>
            <div className={`${isActive ? '' : 'hidden'}`}>
                <Typography textVariant='default' variant='muted' size='sm'>
                    /
                    {selectedFolder && `${normalizedFolders[selectedFolder].label} /`}
                    {selectedFile && `${normalizedFiles[selectedFile].label} /`}
                    {selectedNote && `${normalizedNotes[selectedNote].title}`}
                </Typography>


                <NotesControls />

                <CreateNoteButton />


                <Separator />

                <div className='overflow-scroll my-2 pr-4 h-screen-3/4'>
                    <FolderStructure 
                        folders={hierarchyData} 
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