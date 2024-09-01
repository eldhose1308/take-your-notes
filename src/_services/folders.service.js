import * as folders from '_api/folders.api'


const getFolders = async (data, config={}) => {
    const response = await folders.getFolders(data, config);
    const { data: foldersData=[] } = response;
    const foldersFormatted = foldersData.map(folder => {
        const { folder_name, folder_icon, folder_id } = folder;
        return { id: folder_id, label: folder_name, folderIcon: folder_icon }
    })
    return foldersFormatted || []
}


// const getFolderById = async (id, config={}) => {
//     const response = await folders.getFolderById(id, config)
//     return response || []
// }


const saveFolder = async (data, config={}) => {
    const response = await folders.saveFolder(data, config);
    const { data: folderData=[] } = response;
    const { folder_name, folder_icon, folder_id } = folderData;
    const responseData = { id: folder_id, label: folder_name, folderIcon: folder_icon };
    return responseData
}


const updateFolder = async (data, id, config={}) => {
    const response = await folders.updateFolder(data, id, config);
    const { data: folderData=[] } = response;
    const { folder_name, folder_icon, folder_id } = folderData;
    const responseData = { id: folder_id, label: folder_name, folderIcon: folder_icon };
    return responseData
}

const deleteFolder = async (id, config={}) => {
    const response = await folders.deleteFolder(id, config)
    return response
}

export {
    getFolders,
    // getFolderById,
    saveFolder,
    updateFolder,
    deleteFolder
}