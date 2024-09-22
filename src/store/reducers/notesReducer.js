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
    currentNote: null,
    notesTab: []
};

const notesReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case SET_IS_NOTE_ADDING:
            return { ...state, selectedNoteId: null, currentNote: null, isNoteAdding: payload };

        case 'SET_CURRENT_NOTE':
            return { ...state, isNoteAdding: null, currentNote: payload };

        case 'SET_CURRENT_NOTES_TAB':
            return { ...state, isNoteAdding: null, notesTab: payload };

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
            const fileOfNoteAdded = state.normalisedHierarchyData.files[payload.fileId];
            const hierarchyStateOfFilesAfterNotesAdd = { ...state.normalisedHierarchyData.files, [payload.fileId]: { ...fileOfNoteAdded, notes: [...fileOfNoteAdded.notes, payload.id] }  }

            const hierarchyStateOfNotesBeforeAdd = state.normalisedHierarchyData.notes;
            const hierarchyStateOfNotesAfterAdd = { ...hierarchyStateOfNotesBeforeAdd, [payload.id]: payload }
            return { ...state, normalisedHierarchyData: { ...state.normalisedHierarchyData, files: hierarchyStateOfFilesAfterNotesAdd, notes: hierarchyStateOfNotesAfterAdd } };


        case UPDATE_NOTE:
            const hierarchySelectedNoteBeforeUpdation = state.normalisedHierarchyData.notes[payload.id];
            const hierarchyStateNoteAfterUpdation = { ...state.normalisedHierarchyData.notes, [payload.id]: { ...hierarchySelectedNoteBeforeUpdation, ...payload } }
            return { ...state, normalisedHierarchyData: { ...state.normalisedHierarchyData, notes:  hierarchyStateNoteAfterUpdation  } }



        case 'GET_HIERARCHY':
            return { ...state, hierarchyData: payload };


        case 'REMOVE_HIERARCHY':
            const { [payload]: removedFolder, ...hierarchyAfterRemovalOfFolder } = state.normalisedHierarchyData.folders;
            return { ...state, normalisedHierarchyData: { ...state.normalisedHierarchyData, folders: hierarchyAfterRemovalOfFolder } }

        case 'UPDATE_HIERARCHY_FOLDER':
            const hierarchySelectedFolderBeforeUpdation = state.normalisedHierarchyData.folders[payload.id];
            const hierarchyStateOfFolderAfterUpdation = { ...state.normalisedHierarchyData.folders, [payload.id]: { ...hierarchySelectedFolderBeforeUpdation, ...payload } }

            return { ...state, normalisedHierarchyData: { ...state.normalisedHierarchyData, folders: hierarchyStateOfFolderAfterUpdation } }


        case 'ADD_HIERARCHY_FOLDER':
            const { file: fileOnFolder, ...folderWithoutFile } = payload;
            const { note: noteOnFileInFolder, ...fileWithoutNoteInFolder } = fileOnFolder;
            const hierarchyStateOfFolderAfterAdd = { ...state.normalisedHierarchyData.folders, [payload.id]: { ...folderWithoutFile, files: [fileOnFolder.id] } }
            const hierarchyStateOfFolderAfterAddFile = { ...state.normalisedHierarchyData.files, [fileOnFolder.id]: { ...fileWithoutNoteInFolder, notes: [noteOnFileInFolder.id] } };
            const hierarchyStateOfFolderAfterAddNote = { ...state.normalisedHierarchyData.notes, [noteOnFileInFolder.id]: { ...noteOnFileInFolder } };
            return { ...state, normalisedHierarchyData: { ...state.normalisedHierarchyData, folders: hierarchyStateOfFolderAfterAdd, files: hierarchyStateOfFolderAfterAddFile, notes: hierarchyStateOfFolderAfterAddNote } };

        case 'SET_NORMALISED_HIERARCHY':
            return { ...state, normalisedHierarchyData: payload };





        /*** */    
        case 'REMOVE_HIERARCHY_FILE':
            const hierarchyStateOfFolderForRemoval = state.normalisedHierarchyData.folders[payload.folderId];
            const filesListAfterRemoval = hierarchyStateOfFolderForRemoval.files.filter(fileId => fileId !== payload.id);

            const hierarchyStateOfFolderOnFileRemoval= { ...state.normalisedHierarchyData.folders, [payload.folderId]: { ...hierarchyStateOfFolderForRemoval, files: filesListAfterRemoval }  };
            const { [payload.id]: removedFile, ...hierarchyStateAfterRemoval } = state.normalisedHierarchyData.files;
            return { ...state, normalisedHierarchyData: { ...state.normalisedHierarchyData, folders: hierarchyStateOfFolderOnFileRemoval, files:  hierarchyStateAfterRemoval  } }


        case 'UPDATE_HIERARCHY_FILE':
            const hierarchySelectedFileBeforeUpdation = state.normalisedHierarchyData.files[payload.id];
            const hierarchyStateFileAfterUpdation = { ...state.normalisedHierarchyData.files, [payload.id]: { ...hierarchySelectedFileBeforeUpdation, ...payload } }
            return { ...state, normalisedHierarchyData: { ...state.normalisedHierarchyData, files:  hierarchyStateFileAfterUpdation  } }
    
        case 'ADD_HIERARCHY_FILE':
            const { note: noteOnFile, ...fileWithoutNote } = payload;
            const folderOfFileAdded = state.normalisedHierarchyData.folders[payload.folderId];
            const hierarchyStateNewFolder= { ...state.normalisedHierarchyData.folders, [payload.folderId]: { ...folderOfFileAdded, files: [...folderOfFileAdded.files, payload.id] }  };            
            const hierarchyStateNewFile = { ...state.normalisedHierarchyData.files, [payload.id]: { ...fileWithoutNote, notes: [noteOnFile.id] } };
            const hierarchyStateNewNote = { ...state.normalisedHierarchyData.notes, [noteOnFile.id]: noteOnFile };
            return { ...state, normalisedHierarchyData: { ...state.normalisedHierarchyData, folders: hierarchyStateNewFolder, files: hierarchyStateNewFile, notes: hierarchyStateNewNote  } };
    
        case 'RESET_STATE':
            return initialState;    

        default:
            return state;
    }
}

export default notesReducer;