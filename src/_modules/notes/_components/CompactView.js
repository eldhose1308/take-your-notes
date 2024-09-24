import React from "react"
import { useSelector } from "react-redux"

import FolderAndFileSelector from "./folderAndFileSelector/FolderAndFileSelector"
import NotesControls from "./notesControls/NotesControls"
import CreateNoteButton from "./CreateNoteButton"
import Separator from "_components/Misc/Separator/Separator"
import NoteGridList from "./noteGrid/NoteGridList"

const CompactView = (props) => {
    const { isActive, folders=[], files=[], notes=[], onFolderChange, onFileChange } = props;
    const normalisedData = useSelector(state => state.notes.normalisedHierarchyData);

    const { folders: normalizedFolders = {}, files: normalizedFiles = {}, notes: normalizedNotes = {} } = normalisedData;


    return (
        <React.Fragment>
            <div className={`${isActive ? '' : 'hidden'}`}>
                <div className={`flex justify-between`}>

                    <span className='flex items-center text-secondary cursor-pointer'>
                        <span className='mr-1 items-center' onClick={() => { }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z"></path></svg>
                        </span>
                    </span>

                    {/* <div className='text-default cursor-pointer' onClick={() => alert('ToDo')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>
                    </div> */}
                </div>

                <div className='flex mt-2 justify-between'>

                    <FolderAndFileSelector
                        normalizedFolders={normalizedFolders}
                        normalizedFiles={normalizedFiles}
                        folders={folders}
                        files={files}
                        onFolderChange={onFolderChange}
                        onFileChange={onFileChange}
                    />

                </div>

                <div className='text-xs text-secondary my-1'>{notes.length} notes</div>
                {/* Filters - Sort by: Name, Created Date, Updated Date */}

{/* 
                <NotesControls />
                <CreateNoteButton /> */}

                <Separator />

                <NoteGridList notes={notes} />
            </div>

        </React.Fragment>
    )
}

export default CompactView