import setTheme from "_utils/setTheme";
import { setThemeToLocal } from "_utils/user-localDB/themeDB";
import { GET_FOLDERS } from "store/actionTypes/foldersActionTypes";


export const setUserPreferences = (payload = {}) => async (dispatch) => {
    dispatch({ type: 'USER_PREFERENCES', payload });
};


export const setUserTheme = (payload) => async (dispatch) => {
    dispatch({ type: 'USER_PREFERENCES', payload: { theme: payload } });
    setThemeToLocal(payload);
    setTheme(payload);
};
