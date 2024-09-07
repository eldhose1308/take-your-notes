import { ADD_FILE, ADD_FOLDER, ADD_NOTE, GET_NOTES, SET_CURRENT_FILE, SET_CURRENT_FOLDER, SET_IS_NOTE_ADDING, UPDATE_NOTE } from "store/actionTypes/notesActionTypes";
import { GET_FOLDERS, REMOVE_FOLDER, UPDATE_FOLDER } from "store/actionTypes/foldersActionTypes";
import { GET_FILES, REMOVE_FILE, UPDATE_FILE } from "store/actionTypes/filesActionTypes";

const initialState = {
    notesList: [], // []
    foldersList: [],
    filesList: [],
    hierarchyData: [],
    normalisedHierarchyData: {},
    selectedNote: {},
    isNoteAdding: false,
    selectedNoteId: null,
    currentFolder: null,
    currentFile: null,
    currentNote: null
};

const notesReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case SET_IS_NOTE_ADDING:
            return { ...state, selectedNoteId: null, currentNote: null, isNoteAdding: payload };

        case 'SET_CURRENT_NOTE':
            // const { notesList=[] } = state;
            // const currentNote = notesList.find(notes => notes.id === payload);
            return { ...state, isNoteAdding: null, currentNote: payload };

        case SET_CURRENT_FOLDER:
            return { ...state, currentNote: null, currentFile: null, currentFolder: payload };

        case SET_CURRENT_FILE:
            return { ...state, currentNote: null, currentFile: payload };



        // Folders reducers    
        case GET_FOLDERS:
            return { ...state, foldersList: [...payload] }

        case ADD_FOLDER:
            return { ...state, foldersList: [...state.foldersList, payload] };

        case UPDATE_FOLDER:
            return state;
        // const { id: folderId } = payload;
        // const updatedFolderIndex = state.foldersList.findIndex(({ id }) => id === folderId);
        // const updatedFolder = [...state.foldersList.slice(0, updatedFolderIndex), payload, ...state.foldersList.slice(updatedFolderIndex + 1)];

        // let currentFolder = state.currentFolder;
        // if(state.currentFolder.folderId === folderId){
        //     currentFolder = payload;
        // }
        // return { ...state, foldersList: updatedFolder, currentFolder };

        case REMOVE_FOLDER:
            const foldersAfterRemoval = state.foldersList.filter(({ id }) => id !== payload);

            if (state.currentFolder.folderId === payload) {
                const removedFolderIndex = state.foldersList.findIndex(({ id }) => id === payload);
                const totalSize = state.foldersList.length;
                const nextFolder = state.foldersList[(removedFolderIndex + 1) % totalSize];

                const currentFolder = nextFolder || null;
                return { ...state, foldersList: foldersAfterRemoval, currentFolder, currentFile: null }
            }

            return { ...state, foldersList: foldersAfterRemoval }


        // Files reducers    
        case GET_FILES:
            return { ...state, filesList: [...payload] }

        case ADD_FILE:
            return { ...state, filesList: [...state.filesList, payload] };

        case REMOVE_FILE:
            const filesAfterRemoval = state.filesList.filter(({ id }) => id !== payload);
            if (state.currentFolder.fileId === payload) {
                return { ...state, filesList: filesAfterRemoval, currentFile: null }
            }
            return { ...state, filesList: filesAfterRemoval }

        case UPDATE_FILE:
            const { id: fileId } = payload;
            const updatedFileIndex = state.filesList.findIndex(({ id }) => id === fileId);
            const updatedFile = [...state.filesList.slice(0, updatedFileIndex), payload, ...state.filesList.slice(updatedFileIndex + 1)];

            let currentFile = state.currentFile;
            if (state.currentFile.fileId === fileId) {
                currentFile = payload;
            }
            return { ...state, filesList: updatedFile, currentFile };


        // Notes reducers     
        case GET_NOTES:
            return { ...state, notesList: [...payload] }

        case ADD_NOTE:
            return { ...state, notesList: [...state.notesList, payload] };

        case UPDATE_NOTE:
            const { id: noteId } = payload;
            const updatedNoteIndex = state.notesList.findIndex(({ id }) => id === noteId);
            const updatedNote = [...state.notesList.slice(0, updatedNoteIndex), payload, ...state.notesList.slice(updatedNoteIndex + 1)];

            let currentNote = state.currentNote;
            if (state.currentNote.id === noteId) {
                currentNote = payload;
            }
            return { ...state, notesList: updatedNote, currentNote };


        case 'GET_HIERARCHY':
            return { ...state, hierarchyData: payload };


        case 'REMOVE_HIERARCHY':
            const hierarchyAfterRemoval = state.hierarchyData.filter(({ id }) => id !== payload);
            return { ...state, hierarchyData: hierarchyAfterRemoval }

        case 'UPDATE_HIERARCHY_FOLDER':
            const { id: folderId } = payload;
            const updatedFolderIndex = state.hierarchyData.findIndex(({ id }) => id === folderId);
            const updatedFolder = [...state.hierarchyData.slice(0, updatedFolderIndex), payload, ...state.hierarchyData.slice(updatedFolderIndex + 1)];

            let currentFolder = state.currentFolder;
            if (state.currentFolder.folderId === folderId) {
                currentFolder = payload;
            }
            return { ...state, hierarchyData: updatedFolder, currentFolder };


        case 'ADD_HIERARCHY_FOLDER':
            return { ...state, hierarchyData: [...state.hierarchyData, payload] };

        case 'SET_NORMALISED_HIERARCHY':
            return { ...state, normalisedHierarchyData: payload };





        /*** */    
        case 'REMOVE_HIERARCHY_FILE':
            const hierarchyStateAfterRemoval = state.hierarchyData.map((folder) => {
                const { id: folderId, files } = folder;
                if (folderId === payload.folderId) {
                    const updatedFile = files.filter(({ id: fileId }) => fileId !== payload.fileId);
                    return {
                        ...folder,
                        files: updatedFile
                    }
                }
                return folder;
            });
            return { ...state, hierarchyData: hierarchyStateAfterRemoval };


        case 'UPDATE_HIERARCHY_FILE':
            const hierarchyStateAfterUpdation = state.hierarchyData.map((folder) => {
                const { id: folderId, files } = folder;
                if (folderId === payload.folderId) {
                    const updatedFile = files.map((file) => {
                        const { id: fileId, notes=[] } = file;
                        if(fileId !== payload.id){
                            return file;
                        }
                        return { ...payload, notes }
                    });
                    return { ...folder, files: updatedFile };
                }
                return folder;
            });
            return { ...state, hierarchyData: hierarchyStateAfterUpdation };
    

        case 'ADD_HIERARCHY_FILE':
            const newHierarchyState = state.hierarchyData.map((folder) => {
                const { id: folderId, files } = folder;
                if (folderId === payload.folderId) {
                    return {
                        ...folder,
                        files: [...files, payload]
                    }
                }
                return folder;
            });
            return { ...state, hierarchyData: newHierarchyState };

        default:
            return state;
    }
}

export default notesReducer;