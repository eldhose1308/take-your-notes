import { ADD_FILE, ADD_FOLDER, ADD_NOTE, GET_NOTES, SET_CURRENT_FILE, SET_CURRENT_FOLDER, SET_IS_NOTE_ADDING } from "store/actionTypes/notesActionTypes";
import { GET_FOLDERS, REMOVE_FOLDER, UPDATE_FOLDER } from "store/actionTypes/foldersActionTypes";
import { GET_FILES, REMOVE_FILE, UPDATE_FILE } from "store/actionTypes/filesActionTypes";

const initialState = {
    notesList: [], // []
    foldersList: [],
    filesList: [],
    selectedNote: {},
    isNoteAdding: false,
    selectedNoteId: null,
    currentFolder: null,
    currentFile: null,
    currentNote: null
};

const notesReducer = (state = initialState, action={}) => {
    const { type, payload } = action;
    switch (type) {
        case SET_IS_NOTE_ADDING:
            return { ...state, selectedNoteId: null, currentNote: { title: `Untitled_${state.notesList.length}` }, isNoteAdding: payload };

        case 'SET_CURRENT_NOTE':
            const { notesList=[] } = state;
            const currentNote = notesList.find(notes => notes.id === payload);
            return { ...state, isNoteAdding: null, currentNote, selectedNoteId: payload };

        case SET_CURRENT_FOLDER:
            return { ...state, currentFile: null, currentFolder: payload };
            
        case SET_CURRENT_FILE:
            return { ...state, currentFile: payload };
    
        case ADD_FOLDER:
            return { ...state, foldersList: [...state.foldersList, payload] };
        
        case ADD_FILE:
            return { ...state, filesList: [...state.filesList, payload] };
    

        // Folders reducers    
        case GET_FOLDERS:    
            return { ...state, foldersList: [...payload] }
        
        case UPDATE_FOLDER:
            const { id: folderId } = payload;
            const updatedFolderIndex = state.foldersList.findIndex(({ id }) => id === folderId);
            const updatedFolder = [...state.foldersList.slice(0, updatedFolderIndex), payload, ...state.foldersList.slice(updatedFolderIndex + 1)];

            let currentFolder = state.currentFolder;
            if(state.currentFolder.folderId === folderId){
                currentFolder = payload;
            }
            return { ...state, foldersList: updatedFolder, currentFolder };
            
        case REMOVE_FOLDER:
            const foldersAfterRemoval = state.foldersList.filter(({ id }) => id !== payload);

            if(state.currentFolder.folderId === payload){
                const removedFolderIndex = state.foldersList.findIndex(({ id }) => id === payload);
                const totalSize = state.foldersList.length;
                const nextFolder = state.foldersList[(removedFolderIndex + 1 ) % totalSize];
                
                const currentFolder = nextFolder || null;
                return { ...state, foldersList: foldersAfterRemoval, currentFolder, currentFile: null }
            }

            return { ...state, foldersList: foldersAfterRemoval }

                
        // Files reducers    
        case GET_FILES:    
            return { ...state, filesList: [...payload] }

        case REMOVE_FILE:
            const filesAfterRemoval = state.filesList.filter(({ id }) => id !== payload);
            if(state.currentFolder.fileId === payload){
                return { ...state, filesList: filesAfterRemoval, currentFile: null }
            }
            return { ...state, filesList: filesAfterRemoval }

        case UPDATE_FILE:
            const { id: fileId } = payload;
            const updatedFileIndex = state.filesList.findIndex(({ id }) => id === fileId);
            const updatedFile = [...state.filesList.slice(0, updatedFileIndex), payload, ...state.filesList.slice(updatedFileIndex + 1)];

            let currentFile = state.currentFile;
            if(state.currentFile.fileId === fileId){
                currentFile = payload;
            }
            return { ...state, filesList: updatedFile, currentFile };
            

        // Notes reducers     
        case GET_NOTES:    
            return { ...state, notesList: [...payload] }
        
        case ADD_NOTE:
                return { ...state, notesList: [...state.notesList, payload] };
            

        default: 
            return state;
    }
}

export default notesReducer;