import React, { useState } from "react"

import Dialog from '_components/UI/Dialog/Dialog';
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button } from "_components/Form";
import FolderStructure from '_modules/fileHierarchy/_components/FolderStructure';
import Separator from "_components/Misc/Separator/Separator";
import Flex from "_components/Misc/Flex/Flex";

import folders from "../_utils/mockData";
import { normalizeData } from "../_utils/normalizer";

const NotesHierarchy = (props) => {
    const { setIsHierarchyVisible } = props;

    const { folders: normalizedFolders, files: normalizedFiles, notes: normalizedNotes } = normalizeData(folders)

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

    return (
        <Dialog isShown hasOverlay >
            <Card variant='ghost' rounded='lg'>
                <CardHeader>
                    <Typography size='lg'>Notes hierarchy</Typography>
                </CardHeader>
                <Separator />

                <CardContent className='max-h-lg overflow-scroll'>
                    <Flex>
                        <Card variant='ghost' rounded='md' className='w-md mx-1 my-2'>
                            <CardHeader>
                                <Typography size='lg'>Folder</Typography>
                                <Typography textVariant='default' variant='muted' size='sm'>
                                    /
                                    {selectedFolder && `${normalizedFolders[selectedFolder].name} /`}
                                    {selectedFile && `${normalizedFiles[selectedFile].name} /`}
                                    {selectedNote && `${normalizedNotes[selectedNote].name}`}
                                </Typography>
                            </CardHeader>
                            <Separator />

                            <CardContent className='h-sm overflow-scroll'>

                                <FolderStructure folders={folders} setSelectedFolder={onSelectFolder} setSelectedFile={onSelectFile} setSelectedNote={onSelectNote} />

                            </CardContent>


                        </Card>
                    </Flex>
                </CardContent>
                <Separator />
                <CardFooter className='p-0'>
                    <Button size='xs' width='none' variant='custom' onClick={() => { setIsHierarchyVisible(false) }}>Cancel</Button>
                    <Button size='xs' width='none' variant='accent' onClick={() => { }}>Open</Button>
                </CardFooter>

            </Card>
        </Dialog>
    )
}

export default NotesHierarchy;