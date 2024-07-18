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

const getNotes = (data, config = {}) => {
    return new Promise((resolve, reject) => {
        const storedNotes = getLocalStorageData(NOTES_KEY);
        if (storedNotes) {
            resolve(storedNotes);
        }
        else {
            resolve([])
        }
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

const saveNotes = (data, config = {}) => {
    const { setProgress=()=>{}, abortRequest } = config;

    let progress = 0;
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
            progress = progress + 10
            setProgress(progress)
            if (progress === 100) {
                clearInterval(intervalId);
                try {
                    const res = saveLocalStorageData(NOTES_KEY, data);
                    resolve(res);
                } catch (error) {
                    reject('Failed to save notes');
                }
            }
        })
    });
};


const updateNotes = (id, data, config = {}) => {
    const { setProgress=()=>{}, abortRequest } = config;

    let progress = 0;
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
            progress = progress + 10
            setProgress(progress)
            if (progress === 100) {
                clearInterval(intervalId);
                try {
                    updateLocalStorageData(NOTES_KEY, id, data);
                    resolve(data);
                } catch (error) {
                    reject('Failed to update notes');
                }
            }
        })
    });
};


const deleteNote = (id, config = {}) => {
    const { setProgress=()=>{}, abortRequest } = config;

    let progress = 0;
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
            progress = progress + 10
            setProgress(progress)
            if (progress === 100) {
                clearInterval(intervalId);
                try {
                    deleteLocalStorageData(NOTES_KEY, id);
                    resolve();
                } catch (error) {
                    reject('Failed to update notes');
                }
            }
        })
    });
};

export {
    getNotes,
    getNoteById,
    saveNotes,
    updateNotes,
    deleteNote
}

