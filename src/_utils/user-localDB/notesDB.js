import { getFromLocalDB, saveToLocalDB } from "_utils/localDB";


export const setCurrentNoteToLocal = (data) => {
    saveToLocalDB('note', data);
}


export const setCurrentFileToLocal = (data, resetFlag=false) => {
    saveToLocalDB('file', data);
    if(resetFlag){
        setCurrentNoteToLocal(null);
    }
}


export const setCurrentFolderToLocal = (data, resetFlag=false) => {
    saveToLocalDB('folder', data);
    if(resetFlag){
        setCurrentFileToLocal(null, true);
    }
}



export const getCurrentNoteFromLocal = () => {
    return getFromLocalDB('note')
}


export const getCurrentFileFromLocal = () => {
    return getFromLocalDB('file')
}

export const getCurrentFolderFromLocal = () => {
    return getFromLocalDB('folder')
}

