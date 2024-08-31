import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';

import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";
import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";

import CreateNoteButton from "../_components/CreateNoteButton";
import NoteGridList from "../_components/noteGrid/NoteGridList";

import * as notesModel from "_services/notes.service";
import NotesHierarchy from "_modules/fileHierarchy/_components/NotesHierarchy";
import NotesControls from "../_components/notesControls/NotesControls";
import FolderAndFileSelector from "../_components/folderAndFileSelector/FolderAndFileSelector";
import CompactView from "../_components/CompactView";
import ExplorerView from "../_components/ExplorerView";
import ModeSelector from "_components/UI/ModeSelector/ModeSelector";
import { getFoldersAndSet } from "store/actions/folderActions";


const fileModes = [
    { id: 'compact', label: 'Compact', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg> },
    { id: 'explorer', label: 'Explorer', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-tree"><path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M3 5a2 2 0 0 0 2 2h3"/><path d="M3 3v13a2 2 0 0 0 2 2h3"/></svg> }
]

const NoteNavigator = () => {
    // const [notesList, setNotesList] = useState([]);

    const [isHierarchyVisible, setIsHierarchyVisible] = useState(false);
    const [selectedView, setSelectedView] = useState('compact');

    // const { label: selectedViewLabel } = fileModes.find(({ id }) => id === selectedView) || {};

    const handleModeChange = (mode) => {
        setSelectedView(mode)
    }

    useEffect(() => {
        // async function fetchData() {
        //     const notes = await notesModel.getNotes()
        //     setNotesList(notes)
        // }
        // fetchData();
    }, []);

    return (
        <React.Fragment>
            {isHierarchyVisible && <NotesHierarchy setIsHierarchyVisible={setIsHierarchyVisible} />}

            <ResponsiveDrawer direction='right'>

                <Flex direction='column' alignItems='none' justifyContent='spaceBetween' width='none' className='h-full sticky mr-4 top-0 right-0 overflow-scroll-y bg-light'>

                    <div className="flex items-center justify-end px-2 my-2">
                        {/* <span className="text-default">{selectedViewLabel}</span> */}
                        <ModeSelector modes={fileModes} onChange={handleModeChange} selectedValue={selectedView} renderLabel />
                    </div>

                    <div className='px-2 w-80'>

                            <CompactView isActive={selectedView === 'compact'} />

                            <ExplorerView isActive={selectedView === 'explorer'}/>

                    </div>
                </Flex>
            </ResponsiveDrawer>
        </React.Fragment>
    )
}

export default NoteNavigator;