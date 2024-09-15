import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TabItem, Tabs } from "_components/UI/Tabs/Tabs";
import FileTabItems from "./FileTabItems";
import { removeNoteFromTabs, setCurrentNote, setIsNoteAdding } from "store/actions/notesActions";

const FileTabManager = (props) => {
    const { selectedItem } = props;
    const dispatch = useDispatch();

    const notesTab = useSelector(state => state.notes.notesTab);
    const notesObj = useSelector(state => state.notes.normalisedHierarchyData.notes);

    const handleSelectNote = async (item, e) => {
        e.stopPropagation();
        dispatch(setCurrentNote(item, true));
    }

    const handleDeleteNote = async (item, e) => {
        e.stopPropagation();
        const noteIndex = notesTab.findIndex(note => note === item);

        const currentTabs = await dispatch(removeNoteFromTabs(item));

        if (!currentTabs.length) {
            dispatch(setIsNoteAdding(false));
            return;
        }

        if (!currentTabs.includes(selectedItem)) {
            let nextItem;
            if (noteIndex > 0) {
                nextItem = notesTab[noteIndex - 1];
            } else {
                nextItem = notesTab[noteIndex + 1];
            }
            handleSelectNote(nextItem, e)
        }
    }


    /*** */
    const initBtnStatus = { rightBtn: true, leftBtn: false }
    const menuRef = useRef(null)
    const [buttonStatus, setButtonStatus] = useState(initBtnStatus)

    useEffect(() => {
        console.log('Mounted');
        // const menuNode = menuRef.current;

        // const handleScroll = () => {
        //     const currentScroll = menuRef.current.scrollLeft;
        //     const maxScroll = menuRef.current.scrollWidth - menuRef.current.clientWidth;

        //     setButtonStatus({
        //         leftBtn: currentScroll > 20,
        //         rightBtn: currentScroll < maxScroll - 30
        //     });
        // };

        // menuNode.addEventListener('scroll', handleScroll);
        // return () => {
        //     menuNode.removeEventListener('scroll', handleScroll);
        // };
    }, []);

    const handleLeftScroll = () => {
        const currentScroll = menuRef.current.scrollLeft;
        const targetScroll = Math.max(0, currentScroll - 250);

        menuRef.current.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        })
    }
    const handleRightScroll = () => {
        const currentScroll = menuRef.current.scrollLeft;
        const targetScroll = currentScroll + 250;

        menuRef.current.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        })
    }



    return (
        // <Tabs hasNav>
        // flex flex-1 overflow-x-auto flex-nowrap scrollbar-none text-center my-0 mx-3 p-2 items-center
            <div className="flex flex-nowraps scrollbar-none overflow-x-auto rounded-lg w-halfs bg-default border text-sm text-secondary">
            {
                notesTab.map((item) => <FileTabItems key={item} onDelete={handleDeleteNote} onClick={handleSelectNote} note={notesObj[item]} selectedId={selectedItem} item={item} />)
            }
            </div>
        // </Tabs>
    )
}

export default FileTabManager;