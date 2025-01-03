import { toggleFont } from "_utils/domUtils";
import setTheme from "_utils/setTheme";
import { setFontToLocal } from "_utils/user-localDB/fontDB";
import { setNavigatorToLocal } from "_utils/user-localDB/navigatorDB";
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

export const setUserFont = (payload) => async (dispatch) => {
    // dispatch({ type: 'USER_PREFERENCES', payload: { font: payload } });
    setFontToLocal(payload);
    toggleFont(payload);
};




export const setNavigatorMode = (payload) => async (dispatch) => {
    dispatch({ type: 'USER_PREFERENCES', payload: { navigatorMode: payload } });
    setNavigatorToLocal(payload);
};
