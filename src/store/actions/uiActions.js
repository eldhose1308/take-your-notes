import setTheme from "_utils/setTheme";
import { GET_FOLDERS } from "store/actionTypes/foldersActionTypes";


export const setUserPreferences = (payload = {}) => async (dispatch) => {
    dispatch({ type: 'USER_PREFERENCES', payload });
};


export const setUserTheme = (payload) => async (dispatch) => {
    dispatch({ type: 'USER_PREFERENCES', payload: { theme: payload } });
    localStorage.setItem('theme', payload);
    setTheme(payload);
};
