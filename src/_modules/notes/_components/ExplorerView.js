import React, { useState } from "react";

import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";
import Flex from "_components/Misc/Flex/Flex";
import FolderStructure from "_modules/fileHierarchy/_components/FolderStructure";

import folders from '../../fileHierarchy/_utils/mockData';
import { normalizeData } from '../../fileHierarchy/_utils/normalizer';
import CreateNoteButton from "./CreateNoteButton";
import NotesControls from "./notesControls/NotesControls";

const ExplorerView = (props) => {
    const { isActive } = props;

    const { folders: normalizedFolders, files: normalizedFiles, notes: normalizedNotes } = normalizeData(folders)

    const [selectedFolder, setSelectedFolder] = useState()
    const [selectedFile, setSelectedFile] = useState()
    const [selectedNote, setSelectedNote] = useState()


    if (!isActive) {
        return null;
    }

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

    return (
        <React.Fragment>
            <div className={`${isActive ? '' : 'hidden'}`}>
                <Typography textVariant='default' variant='muted' size='sm'>
                    /
                    {selectedFolder && `${normalizedFolders[selectedFolder].name} /`}
                    {selectedFile && `${normalizedFiles[selectedFile].name} /`}
                    {selectedNote && `${normalizedNotes[selectedNote].name}`}
                </Typography>


                <NotesControls />

                <CreateNoteButton />


                <Separator />

                <div className='overflow-scroll my-2 pr-4 h-screen-3/4'>
                    <FolderStructure folders={folders} setSelectedFolder={onSelectFolder} setSelectedFile={onSelectFile} setSelectedNote={onSelectNote} />
                </div>
            </div>
        </React.Fragment>

    )
}

export default ExplorerView;