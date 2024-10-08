import * as files from "_services/files.service";
import { GET_FILES, REMOVE_FILE, UPDATE_FILE } from "store/actionTypes/filesActionTypes";
import { setCurrentFile } from "./notesActions";
import { ADD_FILE } from "store/actionTypes/notesActionTypes";
import { getCurrentFileFromLocal, setCurrentFileToLocal } from "_utils/user-localDB/notesDB";
import { checkInFolderCache } from "store/utils/checkInCache";


export const getFiles = (folderId) => async (dispatch) => {
    try {
        const filesList = await files.getFiles(folderId);
        dispatch({ type: GET_FILES, payload: filesList });
    } catch (error) {
        console.error('Failed to get files:', error);
    }
};


export const getFilesAndSet = (folder, cache) => async (dispatch) => {
    try {
        const filesList = checkInFolderCache(cache, folder) || await files.getFiles(folder);
        // dispatch({ type: GET_FILES, payload: filesList });
        
        if(filesList.length){
            const currentFileInLocalDB = getCurrentFileFromLocal();
            const selectedFile = currentFileInLocalDB || filesList[0].id;
            dispatch(setCurrentFile(selectedFile));
            return { files: filesList, id: selectedFile };
        }
    } catch (error) {
        console.error('Failed to get folder:', error);
    }
};



export const saveFile = (file) => async (dispatch) => {
    try {
        const newFile = await files.saveFile(file);
        dispatch({ type: ADD_FILE, payload: newFile });
        return newFile;
    } catch (error) {
        console.error('Failed to save file:', error);
    }
};


export const updateFile = (folder, id) => async (dispatch) => {
    try {
        const newFile = await files.updateFile(folder, id);
        dispatch({ type: UPDATE_FILE, payload: newFile });
        return newFile;
    } catch (error) {
        console.error('Failed to update file:', error);
    }
};


export const deleteFile = (data) => async (dispatch) => {
    const { fileId } = data;
    try {
        await files.deleteFile(data);
        dispatch({ type: REMOVE_FILE, payload: fileId });
        return true;
    } catch (error) {
        console.error('Failed to delete file:', error);
    }
};



export const setInitialFile = () => async (dispatch, getState) => {
    const { notes } = getState();
    const { normalisedHierarchyData } = notes;
    const { files: filesNormalised } = normalisedHierarchyData;

    
}


/**** */




export const removeFileHierarchy = (data) => async (dispatch) => {
    try {
        await files.deleteFile(data);
        dispatch({ type: 'REMOVE_HIERARCHY_FILE', payload: data });
        return true;
    } catch (error) {
        console.error('Failed to delete file:', error);
    }
}

export const saveFileHierarchy = (file) => async (dispatch) => {
    try {
        const newFile = await files.saveFile(file);
        dispatch({ type: 'ADD_HIERARCHY_FILE', payload: newFile });
        return newFile;
    } catch (error) {
        console.error('Failed to save file:', error);
    }
}


export const updateFileHierarchy = (data, id) => async (dispatch) => {
    const { folderId, fileId } = id;
    try {
        const newFile = await files.updateFile({ ...data, folderId }, fileId);
        dispatch({ type: 'UPDATE_HIERARCHY_FILE', payload: newFile });
        return newFile;
    } catch (error) {
        console.error('Failed to update file:', error);
    }
}