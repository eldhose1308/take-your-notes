import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";

const getFiles = async (folderId, config = {}) => {
    return new AccessAPI(BASE_URL + `folders/${folderId}/files`).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const saveFile = async (data, config = {}) => {
    const { folderId } = data;
    return new AccessAPI(BASE_URL + `folders/${folderId}/files`).post(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const updateFile = async (data, id, config = {}) => {
    const { folderId } = data;
    return new AccessAPI(BASE_URL + `folders/${folderId}/files/${id}`).put(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

const deleteFile = async ({folderId, fileId}, config = {}) => {
    return new AccessAPI(BASE_URL + `folders/${folderId}/files/${fileId}`).delete()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}

export {
    getFiles,
    saveFile,
    updateFile,
    deleteFile
}