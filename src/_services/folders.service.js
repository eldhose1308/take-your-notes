import * as folders from '_api/folders.api'
import { normalizeData } from '_modules/fileHierarchy/_utils/normalizer';
import { formatFileData } from './files.service';
import { formatNoteData } from './notes.service';

export const formatFolderData = (data) => {
    const { folder_name, folder_icon, folder_id } = data;
    const formattedResponse = { id: folder_id, label: folder_name, folderIcon: folder_icon };
    return formattedResponse;
}

const getFolders = async (data, config = {}) => {
    const response = await folders.getFolders(data, config);
    const { data: foldersData = [] } = response;
    const foldersFormatted = foldersData.map(formatFolderData)
    return foldersFormatted || []
}


// const getFolderById = async (id, config={}) => {
//     const response = await folders.getFolderById(id, config)
//     return response || []
// }


const saveFolder = async (data, config = {}) => {
    const response = await folders.saveFolder(data, config);
    const { data: folderData = [] } = response;
    const { file: fileData={} } = folderData;
    const { note: noteData={} } = fileData;
    const formattedFolderData = formatFolderData(folderData);
    const formattedFileData = formatFileData(fileData);
    const formattedNoteData = formatNoteData(noteData);

    formattedFileData.note = formattedNoteData;
    formattedFolderData.file = formattedFileData;
    return formattedFolderData;
}


const updateFolder = async (data, id, config = {}) => {
    const response = await folders.updateFolder(data, id, config);
    const { data: folderData = [] } = response;
    return formatFolderData(folderData);
}

const deleteFolder = async (id, config = {}) => {
    const response = await folders.deleteFolder(id, config)
    return response
}

const getFoldersFilesNotes = async (config) => {
    const response = await folders.getFoldersFilesNotes(config);
    const { data: foldersFilesNotesData = [] } = response;


    // const normalisedData = normalizeData(hierarchyData);


    // move all these into utils
    /** */
    const foldersList = foldersFilesNotesData.map(folder => {
        const { folder_name, folder_icon, folder_id } = folder;
        return { id: folder_id, label: folder_name, folderIcon: folder_icon }
    })
    /** */

    /** */
    const normalisedData = foldersFilesNotesData.reduce((acc, folder) => {
        const { folder_name, folder_icon, folder_id, files=[] } = folder;
        
        const filesStructured = files.reduce((fileAcc, file) => {
            const { file_name, file_id, notes=[] } = file;

            const notesStructured = notes.reduce((noteAcc, note) => {
                const { title, content, note_id } = note;
                return { ...noteAcc, [note_id]: { id: note_id, content, title } }
            }, {})

            return { ...fileAcc, [file_id]: { id: file_id, label: file_name, notes: notesStructured } }
        }, {})

        return { ...acc, [folder_id]: { id: folder_id, label: folder_name, folderIcon: folder_icon, files: filesStructured } }
    }, {})
    /** */

    /** */
    const hierarchyData = foldersFilesNotesData.map((folder) => {
        const { folder_name, folder_icon, folder_id, files=[] } = folder;
        
        const filesStructured = files.map((file) => {
            const { file_name, file_id, notes=[] } = file;

            const notesStructured = notes.map((note) => {
                const { title, content, note_id } = note;
                return { id: note_id, content, title }
            }, {})

            return { id: file_id, label: file_name, notes: notesStructured}
        }, {})

        return { id: folder_id, label: folder_name, folderIcon: folder_icon, files: filesStructured }
    }, {})
    /** */
    
    const normalisedData_new = normalizeData(hierarchyData);
    
    return { folders: foldersList, normalisedData: normalisedData_new, hierarchyData }
}


export {
    getFoldersFilesNotes,
    getFolders,
    // getFolderById,
    saveFolder,
    updateFolder,
    deleteFolder
}