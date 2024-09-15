import { getFromLocalDB, removeFromLocalDB, saveToLocalDB } from "_utils/localDB";

export const userDetailDBKey = 'user-status';

export const setUserDetailToLocal = (data) => {
    saveToLocalDB(userDetailDBKey, data);
}


export const getUserDetailFromLocal = () => {
    return getFromLocalDB(userDetailDBKey);
}


export const removeUserDetailFromLocal = () => {
    const status = removeFromLocalDB(userDetailDBKey);
    if(status){

    }
}
