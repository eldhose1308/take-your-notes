import { createSelector } from 'reselect';

export const getFolderById = (state, folderId) => state.notes.foldersList.find(({ id }) => id === folderId);
export const getCurrentFolder = (state) => state.notes.currentFolder;
export const getAllFolders = (state) => state.notes.foldersList || []

export const getSelectedFolder = createSelector(
    [getCurrentFolder, getAllFolders],
    (currentFolder='', foldersList=[]) => {
       const abc = foldersList.find(({ id }) => id === currentFolder);
       return abc;
    }
)


export const getCurrentFile = (state) => state.notes.currentFile;
export const getAllFiles = (state) => state.notes.filesList || []

export const getSelectedFile = createSelector(
    [getCurrentFile, getAllFiles],
    (currentFile='', filesList=[]) => {
       const abc = filesList.find(({ id }) => id === currentFile);
       return abc;
    }
)



export const getCurrentNote = (state) => state.notes.currentNote;
export const getAllNotes = (state) => state.notes.notesList || []

export const getSelectedNote = createSelector(
    [getCurrentNote, getAllNotes],
    (currentNote='', notesList=[]) => {
        const abc = notesList.find(({ id }) => id === currentNote);
        return abc;
    }
)
    
export const getBlankNote = (state) => ({ title: `Untitled-${state.notes.notesList.length + 1}` })