import { parseJSON } from "./json";

const stringifyJSON = (json) => {
    const jsonString = JSON.stringify(json);
    return jsonString;
}

export const saveToLocalDB = (key, data) => {
    try{
        localStorage.setItem(key, stringifyJSON(data));
        return true;
    }catch(err){
        throw err;
    }
}

export const getFromLocalDB = (key) => {
    return parseJSON(localStorage.getItem(key));
}

export const removeFromLocalDB = (key) => {
    try{
        localStorage.removeItem(key);
        return true;
    }catch(err){
        return false;
    }
}

export const removeExceptFromLocalDB = (keysToExclude=[]) => {
    // get all Data from localStorage and filter it here and set it as atomic operation
    const allLocalStorageKeys = Object.keys(localStorage);
    try{
        allLocalStorageKeys.forEach(key => {
            if(!(keysToExclude.includes(key))){
                removeFromLocalDB(key);
            }
        })
    }catch(err){
        return false;
    }
}