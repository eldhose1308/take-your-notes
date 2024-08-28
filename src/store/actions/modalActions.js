import { GET_FOLDERS } from "store/actionTypes/foldersActionTypes";
import { setCurrentFolder } from "./notesActions";
import { ADD_FOLDER } from "store/actionTypes/notesActionTypes";



export const confirmDeleteBox = (payload) => async (dispatch) => {
    dispatch({ type: 'DELETE_CONFIRM_BOX', payload });
};


export const showFolderCreateModal = (payload) => async (dispatch) => {
    dispatch({ type: 'CREATE_FOLDER_MODAL', payload });
};


export const showFileCreateModal = (payload) => async (dispatch) => {
    dispatch({ type: 'CREATE_FILE_MODAL', payload });
};

