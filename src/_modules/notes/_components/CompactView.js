import React from "react"

import FolderAndFileSelector from "./folderAndFileSelector/FolderAndFileSelector"
import NotesControls from "./notesControls/NotesControls"
import CreateNoteButton from "./CreateNoteButton"
import Separator from "_components/Misc/Separator/Separator"
import NoteGridList from "./noteGrid/NoteGridList"

const CompactView = (props) => {
    const { isActive } = props;


    return (
        <React.Fragment>
            <div className={`${isActive ? 'translate-x-full-right' : 'hidden'}`}>
                <div className={`flex justify-between`}>

                    <span className='flex items-center text-secondary cursor-pointer'>
                        <span className='mr-1 items-center' onClick={() => { }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z"></path></svg>
                        </span>
                    </span>

                    <div className='text-default cursor-pointer' onClick={() => alert('ToDo')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H20C20.5523 5 21 5.44772 21 6V9H19V7H11.5858L9.58579 5H4V16.998L5.5 11H22.5L20.1894 20.2425C20.0781 20.6877 19.6781 21 19.2192 21H3ZM19.9384 13H7.06155L5.56155 19H18.4384L19.9384 13Z"></path></svg> */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 7V4C6 3.44772 6.44772 3 7 3H13.4142L15.4142 5H21C21.5523 5 22 5.44772 22 6V16C22 16.5523 21.5523 17 21 17H18V20C18 20.5523 17.5523 21 17 21H3C2.44772 21 2 20.5523 2 20V8C2 7.44772 2.44772 7 3 7H6ZM6 9H4V19H16V17H6V9ZM8 5V15H20V7H14.5858L12.5858 5H8Z"></path></svg> */}
                    </div>
                </div>

                <div className='flex mt-2 justify-between'>

                    <FolderAndFileSelector
                    />

                </div>

                <div className='text-xs text-secondary my-1'>5 cards</div>
                {/* Filters - Sort by: Name, Created Date, Updated Date */}


                <NotesControls />
                <CreateNoteButton />

                <Separator />

                <NoteGridList />
            </div>

        </React.Fragment>
    )
}

export default CompactView