import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";

const getFolders = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'folders').get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const saveFolder = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'folders').post(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const updateFolder = async (data, id, config = {}) => {
    return new AccessAPI(BASE_URL + `folders/${id}`).put(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const deleteFolder = async (folderId, config = {}) => {
    return new AccessAPI(BASE_URL + `folders/${folderId}`).delete()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const getFoldersFilesNotes = async () => {
    return new AccessAPI(BASE_URL + `folders?expand=files,notes`).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

export {
    getFoldersFilesNotes,
    getFolders,
    saveFolder,
    updateFolder,
    deleteFolder
}