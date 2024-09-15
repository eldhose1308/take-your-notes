const parseJSON = (jsonString) => {
    try{
        const json = JSON.parse(jsonString);
        return json;
    }catch(err){
        console.warn('Could not parse JSON', err);
        return {}
    }
}

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