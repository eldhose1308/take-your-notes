import { USER_FONT_DBKEY } from "_constants/localStorageKeys";
import { getFromLocalDB, saveToLocalDB } from "_utils/localDB";

export const setFontToLocal = (data) => {
    saveToLocalDB(USER_FONT_DBKEY, data);
}


export const getFontFromLocal = () => {
    return getFromLocalDB(USER_FONT_DBKEY)
}