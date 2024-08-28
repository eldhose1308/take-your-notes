import * as files from '_api/files.api'


const getFiles = async (data, config={}) => {
    const response = await files.getFiles(data, config);
    const { data: filesData=[] } = response;
    const filesFormatted = filesData.map(folder => {
        const { file_name, file_id } = folder;
        return { id: file_id, label: file_name, value: `${file_name}-${file_id}` }
    })
    return filesFormatted || []
}


// const getFolderById = async (id, config={}) => {
//     const response = await folders.getFolderById(id, config)
//     return response || []
// }


const saveFile = async (data, config={}) => {
    const response = await files.saveFile(data, config);
    const { data: fileData=[] } = response;
    const { file_name, file_id } = fileData;
    const responseData = { id: file_id, label: file_name, value: `${file_name}-${file_id}`, fileId: file_id };
    return responseData
}



const updateFile = async (data, id, config={}) => {
    const response = await files.updateFile(data, id, config);
    const { data: fileData=[] } = response;
    const { file_name, file_id } = fileData;
    const responseData = { id: file_id, label: file_name, value: `${file_name}-${file_id}`, fileId: file_id };
    return responseData
}

const deleteFile = async (id, config={}) => {
    const response = await files.deleteFile(id, config)
    return response
}

export {
    getFiles,
    // getFolderById,
    saveFile,
    updateFile,
    deleteFile
}