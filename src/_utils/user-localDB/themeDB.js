import { USER_THEME_DBKEY } from "_constants/localStorageKeys";
import { getFromLocalDB, saveToLocalDB } from "_utils/localDB";

export const setThemeToLocal = (data) => {
    saveToLocalDB(USER_THEME_DBKEY, data);
}


export const getThemeFromLocal = () => {
    return getFromLocalDB(USER_THEME_DBKEY)
}