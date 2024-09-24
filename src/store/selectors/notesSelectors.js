import { createSelector } from 'reselect';


export const getFolderById = (state, folderId) => state.notes.foldersList.find(({ id }) => id === folderId);
export const getCurrentFolder = (state) => state.notes.currentFolder;
export const getAllFolders = (state) => state.notes.normalisedHierarchyData.folders || []
export const getAllFoldersList = (state) => Object.values(state.notes.normalisedHierarchyData.folders || {})


export const getSelectedFolder = createSelector(
    [getCurrentFolder, getAllFolders],
    (currentFolder='', foldersObj={}) => foldersObj[currentFolder]
)


export const getCurrentFile = (state) => state.notes.currentFile;
export const getAllFiles = (state) => state.notes.normalisedHierarchyData.files || []
export const getAllFilesList = (state) => Object.values(state.notes.normalisedHierarchyData.files || {})

export const getSelectedFile = createSelector(
    [getCurrentFile, getAllFiles],
    (currentFile='', filesObj={}) => filesObj[currentFile]
)



export const getCurrentNote = (state) => state.notes.currentNote;
export const getAllNotes = (state) => state.notes.normalisedHierarchyData.notes || []
export const getAllNotesList = (state) => Object.values(state.notes.normalisedHierarchyData.notes || {})

export const getHierarchyData = (state) => state.notes.normalisedHierarchyData;
export const getHierarchyDataList = (state) => state.notes.hierarchyData;



export const getSelectedNote = createSelector(
    [getCurrentNote, getAllNotes],
    (currentNote, notesObj={}) => notesObj[currentNote]
)
    
export const getBlankNote = (state) => ({ title: `Untitled-${state.notes.notesList.length + 1}` })



export const getFoldersList = createSelector(
    [getHierarchyDataList],
    (hierarchyData) => {
        const folders = hierarchyData.map(({ files, ...folderDetails }) => folderDetails);
        return folders;
    }
)



export const getFilesOfSelectedFolder = createSelector(
    [getCurrentFolder, getAllFolders, getAllFiles],
    (currentFolder, foldersObj, filesObj) => {
        const { files=[] } = foldersObj[currentFolder] || {};
        const filesInFolder = Object.keys(filesObj).reduce((acc, fileId) => {
            if(files.includes(fileId)){
                return { ...acc, [fileId]: filesObj[fileId] }
            }
            return acc;
        }, {});
        return filesInFolder;
    }
)



export const getNotesOfSelectedFile = createSelector(
    [getCurrentFile, getAllFiles, getAllNotes],
    (currentFolder, foldersObj, notesObj) => {
        const { notes=[] } = foldersObj[currentFolder] || {};
        const filesInFolder = Object.keys(notesObj).reduce((acc, fileId) => {
            if(notes.includes(fileId)){
                return { ...acc, [fileId]: notesObj[fileId] }
            }
            return acc;
        }, {});
        return filesInFolder;
    }
)