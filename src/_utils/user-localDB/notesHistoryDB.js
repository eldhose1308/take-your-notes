import { getFromLocalDB, saveToLocalDB } from "_utils/localDB";
import { setCurrentFileToLocal, setCurrentFolderToLocal, setCurrentNoteToLocal } from "./notesDB";


export const resetNoteTabHistory = () => {
    setCurrentFolderToLocal(null);
    setCurrentFileToLocal(null);
    setCurrentNoteToLocal(null);
}

export const getNoteTabFromLocal = () => {
    return getFromLocalDB('noteTabs')
}

export const removeNoteTabFromLocal = (data) => {
    const currentNotesTabs = getNoteTabFromLocal() || [];
    const notesAfterRemoval = currentNotesTabs.filter((note) => note !== data );
    if(notesAfterRemoval.length === 0){
        resetNoteTabHistory()
    }
    saveToLocalDB('noteTabs', notesAfterRemoval);
    return notesAfterRemoval;
}

export const setNoteTabToLocal = (data) => {
    const currentNotesTabs = getNoteTabFromLocal() || [];
    if(!currentNotesTabs.includes(data)){
        currentNotesTabs.push(data);
    }
    saveToLocalDB('noteTabs', currentNotesTabs);
    return currentNotesTabs;
}

