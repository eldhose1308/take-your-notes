import { USER_NAVIGATOR_DBKEY } from "_constants/localStorageKeys";
import { getFromLocalDB, saveToLocalDB } from "_utils/localDB";

export const setNavigatorToLocal = (data) => {
    saveToLocalDB(USER_NAVIGATOR_DBKEY, data);
}


export const getNavigatorFromLocal = () => {
    return getFromLocalDB(USER_NAVIGATOR_DBKEY)
}