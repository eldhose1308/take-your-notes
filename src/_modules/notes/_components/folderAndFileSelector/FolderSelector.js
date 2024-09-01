import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Combobox, { ComboboxContent, ComboboxTrigger } from "_components/UI/Combobox/Combobox";

import { getAllFolders, getSelectedFolder } from "store/selectors/notesSelectors";
import { deleteFolder, getFoldersAndSet, saveFolder, updateFolder } from "store/actions/folderActions";
import { confirmDeleteBox, showFolderCreateModal } from "store/actions/modalActions";


const FolderSelector = (props) => {
    const { onSelect, folders: folderOptions } = props;
    const dispatch = useDispatch();

    // const folderOptions = useSelector(getAllFolders);
    const { id, label } = useSelector(getSelectedFolder) || {};

    const handleSelect = (id, option) => {
        onSelect(id, option);
    }

    const handleSubmit = async (folderName, folderId) => {
        const payload = {
            folder_name: folderName
        }
        if(folderId){
            await dispatch(updateFolder(payload, folderId)); 
            return;
        }
        const { label, value, id } = await dispatch(saveFolder(payload));
        handleSelect(id, { label, value, id });
    }

    const showCreateDialog = (folderArg) => {
        const folderName = typeof folderArg === 'string' ? folderArg : '';
        const dialogData = {
            data: { folderName },
            status: true,
            onClick: handleSubmit
        }
        dispatch(showFolderCreateModal(dialogData))
    }

    const showUpdateDialog = (id, option, e) => {
        e.stopPropagation();

        const { id: folderId, label: folderName } = option;
        const dialogData = {
            data: { id: folderId, folderName },
            status: true,
            onClick: handleSubmit
        }
        dispatch(showFolderCreateModal(dialogData))
    }


    const handleDelete = async (id) => {
        if (!id) { return }
        try {
            await dispatch(deleteFolder(id));
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


    // useEffect(() => {
    //     dispatch(getFoldersAndSet());
    // }, [])


    return (
        <>

            <div className='flex justify-between'>
                <div className="flex">

                    <span className='folder-separator text-secondary'>
                        Folder
                    </span>
                    <span className='folder-separator text-secondary'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path></svg>
                    </span>
                    <Combobox key={`${id}_${label}`}>
                        <ComboboxTrigger>
                            <span className='flex mx-1 items-center text-secondary cursor-pointer'>
                                <span className=''>{label}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z"></path></svg>
                            </span>
                        </ComboboxTrigger>
                        <ComboboxContent
                            heading='Search in Folders'
                            options={folderOptions}
                            onChange={handleSelect}
                            selectedValue={id}
                            renderAdd={(searchQuery) => {
                                return !searchQuery ? 'Type a new item and click' : <p onClick={() => { showCreateDialog(searchQuery) }}>Create new "{searchQuery}"</p>
                            }}
                            renderItemAction={(id, option) => {
                                return (
                                    <div>
                                        <span className="hover-text-primary mr-1 text-accent group-hover-item invisible" onClick={(e) => showUpdateDialog(id, option, e)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                        </span>
                                        <span className="hover-text-destructive text-accent group-hover-item invisible" onClick={(e) => showDeleteDialog(id, option, e)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                        </span>
                                    </div>
                                )
                            }}
                        />
                    </Combobox>
                </div>
                <div>

                    <span onClick={showCreateDialog} className="text-secondary hover-text-default cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                    </span>
                </div>
            </div>
        </>
    )
}

export default FolderSelector