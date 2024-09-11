import { getFromLocalDB, saveToLocalDB } from "_utils/localDB";


export const getNoteTabFromLocal = () => {
    return getFromLocalDB('noteTabs')
}

export const removeNoteTabFromLocal = (data) => {
    const currentNotesTabs = getNoteTabFromLocal() || [];
    const notesAfterRemoval = currentNotesTabs.filter((note) => note !== data );
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

