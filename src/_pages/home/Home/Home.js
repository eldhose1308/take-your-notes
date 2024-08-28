import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Flex from "_components/Misc/Flex/Flex";


import CommandCenter from '_modules/notes/_components/CommandCenter';

import NoteNavigator from '_modules/notes/_containers/NoteNavigator';

import './Home.css'
import NoteDisplayManager from '_modules/notes/_components/NoteDisplayManager';
import { getFolders } from 'store/actions/folderActions';
import { getFiles } from 'store/actions/fileActions';
import ConfirmDeleteModal from '_modules/modals/ConfirmDeleteModal';
import FolderCreateModal from '_modules/modals/FolderCreateModal';
import FileCreateModal from '_modules/modals/FileCreateModal';

const Home = () => {
    // const { isDrawerOpen, closeDrawer, openDrawer } = useDrawer()
    const dispatch = useDispatch();

    const isNoteAdding = useSelector(state => state.notes.isNoteAdding)

    const [isLanding, setIsLanding] = useState(true);

    // useEffect(() => {
    //     dispatch(getFolders());
    // }, [])



    // const handleNoteSelect = (selectedId) => {
    //     setSelectedNoteId(selectedId)
    // }



    return (
        <React.Fragment>

            <Flex alignItems='none' justifyContent='spaceBetween' wrap='none' className='my-4 mx-4'>

                <NoteNavigator />

                <Flex direction='column' alignItems='none' wrap='none' justifyContent='none' width='none' className='grow-2 h-full bg-light'>
                    <NoteDisplayManager />
                </Flex>


            </Flex>


            {/* Move this to outside portal */}

            <ConfirmDeleteModal />
            <FolderCreateModal />
            <FileCreateModal />

        </React.Fragment>
    )
}

export default Home