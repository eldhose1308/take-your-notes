import * as folders from "_services/folders.service";
import { GET_FOLDERS, REMOVE_FOLDER, UPDATE_FOLDER } from "store/actionTypes/foldersActionTypes";
import { setCurrentFolder } from "./notesActions";
import { ADD_FOLDER } from "store/actionTypes/notesActionTypes";
import { getCurrentFolderFromLocal, setCurrentFolderToLocal } from "_utils/user-localDB/notesDB";


export const getFolders = (folder) => async (dispatch) => {
    try {
        const newFolder = await folders.getFolders();
        dispatch({ type: GET_FOLDERS, payload: newFolder });
    } catch (error) {
        console.error('Failed to get folder:', error);
    }
};


export const getFoldersAndSet = () => async (dispatch) => {
    try {
        const foldersList = await folders.getFolders();
        dispatch({ type: GET_FOLDERS, payload: foldersList });
        
        if(foldersList.length){
            const currentFolderInLocalDB = getCurrentFolderFromLocal();
            const selectedFolder = currentFolderInLocalDB || foldersList[0].id;
            dispatch(setCurrentFolder(selectedFolder))
            return { folders: foldersList, id: selectedFolder };
        }
    } catch (error) {
        console.error('Failed to get folder:', error);
    }
};

export const saveFolder = (folder) => async (dispatch) => {
    try {
        const newFolder = await folders.saveFolder(folder);
        dispatch({ type: ADD_FOLDER, payload: newFolder });
        return newFolder;
    } catch (error) {
        console.error('Failed to get folder:', error);
    }
};


export const updateFolder = (folder, id) => async (dispatch) => {
    try {
        const newFolder = await folders.updateFolder(folder, id);
        dispatch({ type: UPDATE_FOLDER, payload: newFolder });
        return newFolder;
    } catch (error) {
        console.error('Failed to get folder:', error);
    }
};


export const deleteFolder = (folderId) => async (dispatch) => {
    try {
        await folders.deleteFolder(folderId);
        dispatch({ type: REMOVE_FOLDER, payload: folderId });
        return true;
    } catch (error) {
        console.error('Failed to delete folder:', error);
    }
};



export const getFoldersFilesNotesAndSet = () => async (dispatch) => {
    try {
        const { folders: foldersList, hierarchyData, normalisedData } = await folders.getFoldersFilesNotes();
        dispatch({ type: GET_FOLDERS, payload: foldersList });
        
        if(foldersList.length){
            const currentFolderInLocalDB = getCurrentFolderFromLocal();
            const selectedFolder = currentFolderInLocalDB || foldersList[0].id;
            dispatch(setCurrentFolder(selectedFolder))
            return { folders: foldersList, id: selectedFolder, hierarchyData, normalisedData };
        }
    } catch (error) {
        console.error('Failed to get folder file notes:', error);
    }
}