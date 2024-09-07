import React, { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux';

import Flex from "_components/Misc/Flex/Flex";
import ResponsiveDrawer from "_components/UI/Drawer/ResponsiveDrawer";


import NotesHierarchy from "_modules/fileHierarchy/_components/NotesHierarchy";

import CompactView from "../_components/CompactView";
import ExplorerView from "../_components/ExplorerView";
import ModeSelector from "_components/UI/ModeSelector/ModeSelector";
import { getFoldersAndSet, getFoldersFilesNotesAndSet } from "store/actions/folderActions";
import { getFilesAndSet } from "store/actions/fileActions";
import { getNotesAndSet } from "store/actions/notesActions";
import { getAllFolders } from "store/selectors/notesSelectors";


const fileModes = [
    { id: 'compact', label: 'Compact', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg> },
    { id: 'explorer', label: 'Explorer', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-tree"><path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" /><path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" /><path d="M3 5a2 2 0 0 0 2 2h3" /><path d="M3 3v13a2 2 0 0 0 2 2h3" /></svg> }
]

const NoteNavigator = () => {
    const dispatch = useDispatch();

    const hierarchyCache = useRef({});

    const [hierarchyData, setHierarchyData] = useState([]); 

    // remove all these and use the above for this
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);
    const [notes, setNotes] = useState([]);

    const [isHierarchyVisible, setIsHierarchyVisible] = useState(false);
    const [selectedView, setSelectedView] = useState('explorer');


    const handleModeChange = (mode) => {
        setSelectedView(mode)
    }


    const handleFileChange = async (fileId, folderId, flagSkipNotes) => { // pass the cacheObj and evaluate wrt
        const { notes } = await dispatch(getNotesAndSet({ folderId, fileId },  hierarchyCache.current, flagSkipNotes)) || {};
        setNotes(notes);
    }


    const handleFolderChange = async (folderId) => { // pass the cacheObj and evaluate wrt
        const { id: fileId, files } = await dispatch(getFilesAndSet(folderId, hierarchyCache.current));
        setFiles(files);
        handleFileChange(fileId, folderId);
    }

    const handleFolderUpdate = () => {
        
    }

    const handleFolderDelete = async (folderId) => {
        const deletedFolderId = folders.findIndex(({ id }) => id === folderId);
        const foldersWithoutFolder = folders.slice(0, deletedFolderId).concat(folders.slice(deletedFolderId + 1)); // use filter?
        
        setFolders(foldersWithoutFolder);
        // sync with files(deleted folder's files remove) and hirearchy cache

        const hirearchyDataWithoutFolder = hierarchyData.filter(({ id }) => id !== folderId);
        setHierarchyData(hirearchyDataWithoutFolder);
    }



    useEffect(() => {
        const fetchFoldersFilesNotes = async () => {
            const { folders, id: folderId, normalisedData, hierarchyData } = await dispatch(getFoldersFilesNotesAndSet()); 
            const { id: fileId, files } = await dispatch(getFilesAndSet(folderId));
            const { notes } = await dispatch(getNotesAndSet({ folderId, fileId })) || {};
            
            hierarchyCache.current = normalisedData;

            setHierarchyData(hierarchyData);
            // setFolders(folders);
            // setFiles(files);
            // setNotes(notes);

        }

        fetchFoldersFilesNotes();
    }, [])

    return (
        <React.Fragment>
            {isHierarchyVisible && <NotesHierarchy setIsHierarchyVisible={setIsHierarchyVisible} />}

            <ResponsiveDrawer direction='right'>

                <Flex direction='column' alignItems='none' justifyContent='spaceBetween' width='none' className='h-full sticky mr-4 top-0 right-0 overflow-scroll-y bg-light'>

                    <div className="flex items-center justify-end px-2 my-2">
                        <ModeSelector modes={fileModes} onChange={handleModeChange} selectedValue={selectedView} renderLabel />
                    </div>

                    <div className='px-2 w-80'>

                        {selectedView === 'compact' ? (
                            <CompactView
                                folders={folders}
                                files={files}
                                notes={notes}
                                onFolderChange={handleFolderChange}
                                onFileChange={handleFileChange}
                                isActive
                            />
                        ) : (
                            <ExplorerView
                                hierarchyData={hierarchyData}
                                onFolderChange={handleFolderChange}
                                onFileChange={handleFileChange}
                                onFolderDelete={handleFolderDelete}
                                onFolderUpdate={handleFolderUpdate}
                                isActive
                            />
                        )}

                    </div>
                </Flex>
            </ResponsiveDrawer>
        </React.Fragment>
    )
}

export default NoteNavigator;