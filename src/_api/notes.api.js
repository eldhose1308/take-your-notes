import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";

const NOTES_KEY = 'notes';


const getLocalStorageData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

const saveLocalStorageData = (key, data) => {
    const existingData = getLocalStorageData(key) || []
    const newId = existingData.length + 1

    const newItemData = { id: newId, ...data }

    const newData = [...existingData, newItemData]
    localStorage.setItem(key, JSON.stringify(newData));

    return newItemData
};

const updateLocalStorageData = (key, id, data) => {
    const existingData = getLocalStorageData(key) || []
    const updatedData = existingData.map((item) => {
        if(item.id === id){
            return { id, ...data }
        }
        return item
    })
    localStorage.setItem(key, JSON.stringify(updatedData));
};

const deleteLocalStorageData = (key, id) => {
    const existingData = getLocalStorageData(key) || []
    const updatedData = existingData.filter((item) => item.id !== id)
    localStorage.setItem(key, JSON.stringify(updatedData));
}

const getNotes = ({ folderId, fileId }, config = {}) => {
    return new AccessAPI(BASE_URL + `folders/${folderId}/files/${fileId}/notes`).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}


const getNoteById = (id, config = {}) => {
    return new Promise((resolve, reject) => {
        const storedNotes = getLocalStorageData(NOTES_KEY);
        if (storedNotes) {
            const selectedNote = storedNotes.find(({ id: noteId }) => noteId === id)
            resolve(selectedNote)
        }
        else {
            resolve([])
        }
    })
}

const saveNote = (data, config = {}) => {
    const { folderId, fileId } = data;
    return new AccessAPI(BASE_URL + `folders/${folderId}/files/${fileId}/notes`).post(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
};


const updateNote = async (data, id, config = {}) => {
    const { folderId, fileId } = data;
    return new AccessAPI(BASE_URL + `folders/${folderId}/files/${fileId}/notes/${id}`).put(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}



const deleteNote = async ({ folderId, fileId, noteId }, config = {}) => {
    return new AccessAPI(BASE_URL + `folders/${folderId}/files/${fileId}/notes/${noteId}`).delete()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

export {
    getNotes,
    getNoteById,
    saveNote,
    updateNote,
    deleteNote
}

