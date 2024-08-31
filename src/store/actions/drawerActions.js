import { GET_FOLDERS } from "store/actionTypes/foldersActionTypes";
import { ADD_FOLDER } from "store/actionTypes/notesActionTypes";



export const openSettingsDrawer = (payload = true) => async (dispatch) => {
    dispatch({ type: 'SETTINGS_DRAWER', payload });
};
