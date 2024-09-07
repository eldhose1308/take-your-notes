import React, { useState } from "react";

import ContextMenu from "_components/UI/ContextMenu/ContextMenu";
import FileComponent from "./FileComponent";
import NoteOptionsMenu from "_modules/notes/_components/noteOptionsMenu/NoteOptionsMenu";

import { arrowIcons } from "../_utils/mockData";

import { useFilesCrud } from "../_hooks";

const menuOptions = [
    { label: 'Option 1', onClick: () => console.log('Option 1 clicked') },
    { label: 'Option 2', onClick: () => console.log('Option 2 clicked') },
    { label: 'Option 3', onClick: () => console.log('Option 3 clicked') },
];

const FolderComponent = ({ folder, isExpanded, expandedFiles, toggleFolder, toggleFile, toggleNote, selectedFile, selectedNote, onFolderDelete, onFolderEdit }) => {
    const { files, ...folderData } = folder;
    const { id: folderId, label } = folderData;


    const [menuPosition, setMenuPosition] = useState({ xPos: '0px', yPos: '0px' });
    const [showMenu, setShowMenu] = useState(false);

    const { showCreateDialog, showUpdateDialog, showDeleteDialog } = useFilesCrud(folderId);


    const onFileDelete = (fileId, option, e) => {
        showDeleteDialog(fileId, folderId, option, e)
    }


    const onFileCreate = () => {
        const { label } = folder;
        showCreateDialog({ folderName: label }, label)
    }

    const onFileEdit = (id, option, e) => {
        showUpdateDialog(id, folderId, option, e);
    }

    const handleContextMenu = (event) => {
        event.preventDefault();
        setMenuPosition({
            xPos: `${event.pageX}px`,
            yPos: `${event.pageY}px`,
        });
        setShowMenu(true);
    };

    return (
        <div className={`flex text-sm text-default cursor-pointer`} onContextMenu={handleContextMenu}>
            <div className={`flex relative item-center justify-between mt-0 py-1 pr-2 w-full duration-300 hover-text-default group-hover ${isExpanded ? 'text-default bg-highlights rounded-md' : 'text-secondary'}`} onClick={() => { toggleFolder(folderId) }}>
                <div className="flex">

                    <span className='flex items-center mr-2'>
                        {arrowIcons[isExpanded]}
                    </span>
                    <span>{label}</span>
                </div>

                {showMenu && (
                    <ContextMenu
                        xPos={menuPosition.xPos}
                        yPos={menuPosition.yPos}
                        options={menuOptions}
                        onClose={(e) => { e.stopPropagation(); setShowMenu(false) }}
                    />
                )}

                <NoteOptionsMenu
                    id={folderId}
                    item={folderData}
                    onCreate={onFileCreate}
                    onDelete={onFolderDelete}
                    onEdit={onFolderEdit}
                />
            </div>

            {isExpanded && <div className='ml-4 w-full'>
                {files && files.map((file) => {
                    const { id: fileId } = file;
                    return (
                        <FileComponent
                            key={`file_${fileId}`}
                            file={file}
                            folder={folderData}
                            folderId={folderId}
                            isExpanded={!!expandedFiles[fileId]}
                            toggleFile={toggleFile}
                            toggleNote={toggleNote}
                            selectedNote={selectedNote}
                            onFileDelete={onFileDelete}
                            onFileEdit={onFileEdit}
                        />
                    )
                })}
            </div>}

        </div>
    )
}

export default FolderComponent;