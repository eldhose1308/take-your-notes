import * as files from '_api/files.api'
import { formatNoteData } from './notes.service';

export const formatFileData = (data) => {
    const { file_name, file_id, folder_id } = data;
    const formattedResponse = { id: file_id, label: file_name, folderId: folder_id };
    return formattedResponse;
}

const getFiles = async (data, config={}) => {
    const response = await files.getFiles(data, config);
    const { data: filesData=[] } = response;
    const filesFormatted = filesData.map(formatFileData)
    return filesFormatted || []
}


// const getFolderById = async (id, config={}) => {
//     const response = await folders.getFolderById(id, config)
//     return response || []
// }


const saveFile = async (data, config={}) => {
    const response = await files.saveFile(data, config);
    const { data: fileData={} } = response;
    const { note: noteData={} } = fileData;
    const formattedFileData = formatFileData(fileData);
    const formattedNoteData = formatNoteData(noteData);

    formattedFileData.note = formattedNoteData;
    return formattedFileData;
}



const updateFile = async (data, id, config={}) => {
    const response = await files.updateFile(data, id, config);
    const { data: fileData=[] } = response;
    return formatFileData(fileData)
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