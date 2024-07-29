import React, { useState } from "react";

import Separator from "_components/Misc/Separator/Separator";
import { arrowIcons } from "../_utils/mockData";

const FolderComponent = ({ folder, isExpanded, expandedFiles, toggleFolder, toggleFile, toggleNote }) => {
    const { id, name, files } = folder;

    return (
        <div className={`flex text-sm text-default cursor-pointer`}>
            <div className={`flex item-center my-1 py-1 pr-2 w-full duration-300 hover-opacity-100 ${isExpanded ? 'opacity-100 bg-highlights rounded-md' : 'opacity-75'}`} onClick={() => { toggleFolder(id) }}>
                <span className='flex items-center mr-2'>
                    {arrowIcons[isExpanded]}
                </span>
                <span>{name}</span>
            </div>

            {isExpanded && <div className='ml-4 w-full'>
                {files && files.map((file) => {
                    const { id } = file;
                    return (
                        <>
                            <FileComponent key={id} file={file} isExpanded={!!expandedFiles[id]} toggleFile={toggleFile} toggleNote={toggleNote} />
                        </>
                    )
                })}
            </div>}

        </div>
    )
}



const FileComponent = ({ file, isExpanded, toggleFile, toggleNote }) => {
    const { id, name, notes } = file;

    return (
        <div className={`flex text-sm text-default cursor-pointer`}>
            <div className={`flex items-center my-1 py-1 pr-2 justify-betweens w-full  duration-300 hover-opacity-100 ${isExpanded ? 'opacity-100 bg-highlights rounded-md' : 'opacity-75'}`} onClick={() => toggleFile(id)}>
                <span className='flex items-center mr-2'>
                    {arrowIcons[isExpanded]}
                </span>
                <span>{name}</span>
            </div>

            {isExpanded && <div className='ml-4'>
                {notes && notes.map((note) => (
                    <NoteComponent key={note.id} note={note} toggleNote={toggleNote} />
                ))}
            </div>}

        </div>
    )
}



const NoteComponent = ({ note, toggleNote }) => {
    const { id, name } = note;

    return (
        <div key={id} className={`flex my-1 py-1 pr-2 text-sm text-default cursor-pointer duration-300 hover-opacity-100`}>
            <div className='flex justify-between w-full' onClick={() => toggleNote(id)}>
                <span>{name}</span>
            </div>

        </div>
    )
}


const FolderStructure = (props) => {
    const { folders, setSelectedFolder, setSelectedFile, setSelectedNote } = props;

    const [expandedFolders, setExpandedFolders] = useState({});
    const [expandedFiles, setExpandedFiles] = useState({});


    const toggleFolder = (folderId) => {
        setSelectedFolder(folderId)
        setExpandedFolders((prev) => ({
            ...prev,
            [folderId]: !prev[folderId]
        }));
    };

    const toggleFile = (fileId) => {
        setSelectedFile(fileId)
        setExpandedFiles((prev) => ({
            ...prev,
            [fileId]: !prev[fileId]
        }));
    };

    return (
        <div className=''>
            {folders.map((folder) => {
                const { id } = folder;
                return (
                    <>
                        <FolderComponent
                            key={id}
                            folder={folder}
                            expandedFiles={expandedFiles}
                            isExpanded={!!expandedFolders[id]}
                            toggleFolder={toggleFolder}
                            toggleFile={toggleFile}
                            toggleNote={setSelectedNote}
                        />
                        <Separator />
                    </>
                )
            })}
        </div>
    )
}

export default FolderStructure