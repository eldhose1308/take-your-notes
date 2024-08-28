import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import FolderSelector from "./FolderSelector";
import FileSelector from "./FileSelector";
import { setCurrentFile, setCurrentFolder } from "store/actions/notesActions";
import { getFolders, getFoldersAndSet } from "store/actions/folderActions";
import { getFiles, getFilesAndSet } from "store/actions/fileActions";

const FolderAndFileSelector = (props) => {
    const dispatch = useDispatch();

    const handleFileSelect = (id, option) => {
        dispatch(setCurrentFile(option));
    }

    const handleFolderSelect = (id, option) => {
        dispatch(setCurrentFolder(option));
    }

    const handleToggleLandingPage = () => {
        // setIsLanding(true)
    }

  

    return (
        <div className='flex flex-col text-sm w-full'>
            {/* <span className='flex items-center text-secondary cursor-pointer'>
                <span className='mr-1 items-center' onClick={handleToggleLandingPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z"></path></svg>
                </span>
            </span> */}


            <FolderSelector
                onSelect={handleFolderSelect}
            />

            <FileSelector
                onSelect={handleFileSelect}
            />

        </div>
    )
}

export default FolderAndFileSelector;