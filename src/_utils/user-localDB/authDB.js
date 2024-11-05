import { KEEP_ON_LOGOUT_KEYS, USER_DETAIL_DBKEY } from "_constants/localStorageKeys";
import { getFromLocalDB, removeExceptFromLocalDB, removeFromLocalDB, saveToLocalDB } from "_utils/localDB";


export const setUserDetailToLocal = (data) => {
    saveToLocalDB(USER_DETAIL_DBKEY, data);
}


export const getUserDetailFromLocal = () => {
    return getFromLocalDB(USER_DETAIL_DBKEY);
}


export const removeUserDetailFromLocal = () => {
    const status = removeFromLocalDB(USER_DETAIL_DBKEY);
    if(status){

    }
}

export const resetUserDetailFromLocal = () => {
    const status = removeExceptFromLocalDB(KEEP_ON_LOGOUT_KEYS);
}