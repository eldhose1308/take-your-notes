export const parseJSON = (jsonString) => {
    try{
        const json = JSON.parse(jsonString);
        return json;
    }catch(err){
        console.warn('Could not parse JSON', err);
        return {}
    }
}

export const stringifyJSON = (json) => {
    try{
        const jsonString = JSON.stringify(json);
        return jsonString;
    }catch(err){
        console.warn('Could not stringify JSON', err);
        return ''
    }
}

