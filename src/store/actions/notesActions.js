import * as notes from "_services/notes.service";
import { getCurrentNoteFromLocal, setCurrentFileToLocal, setCurrentFolderToLocal, setCurrentNoteToLocal } from "_utils/user-localDB/notesDB";
import { removeNoteTabFromLocal, setNoteTabToLocal } from "_utils/user-localDB/notesHistoryDB";
import { ADD_FILE, ADD_FOLDER, ADD_NOTE, GET_NOTES, REMOVE_NOTE, SET_CURRENT_FILE, SET_CURRENT_FOLDER, SET_CURRENT_NOTE, SET_IS_NOTE_ADDING, UPDATE_NOTE } from "store/actionTypes/notesActionTypes";
import { checkInFileCache } from "store/utils/checkInCache";


export const setIsNoteAdding = (status = true) => async (dispatch) => {
    dispatch({ type: SET_IS_NOTE_ADDING, payload: status });
}

// rename it to something meaningful
export const setIsNoteAddingFor = (folderId, fileId) => async (dispatch) => {
    dispatch(setCurrentFolder(folderId));
    dispatch(setCurrentFile(fileId));
    dispatch({ type: SET_IS_NOTE_ADDING, payload: true });
}


export const setCurrentFolder = (data, resetFlag = false) => async (dispatch) => {
    setCurrentFolderToLocal(data, resetFlag);
    dispatch({ type: SET_CURRENT_FOLDER, payload: data });
}

export const setCurrentFile = (data, resetFlag = false) => async (dispatch) => {
    setCurrentFileToLocal(data, resetFlag);
    dispatch({ type: SET_CURRENT_FILE, payload: data });
}

export const setCurrentNote = (data) => async (dispatch, getState) => {
    const { notes } = getState();
    const { normalisedHierarchyData } = notes;
    const { notes: notesNormalised } = normalisedHierarchyData;
    const { folderId, fileId } = notesNormalised[data];
    
    dispatch(setCurrentFolder(folderId));
    dispatch(setCurrentFile(fileId));

    const allNotesTab = setNoteTabToLocal(data);
    setCurrentNoteToLocal(data);
    dispatch({ type: SET_CURRENT_NOTE, payload: data });
    dispatch({ type: 'SET_CURRENT_NOTES_TAB', payload: allNotesTab });
    return allNotesTab;
}

export const removeNoteFromTabs = (data) => async (dispatch) => {
    const allNotesTab = removeNoteTabFromLocal(data);
    dispatch({ type: 'SET_CURRENT_NOTES_TAB', payload: allNotesTab });
    return allNotesTab;
}

export const addFolder = (data) => async (dispatch) => {
    try {
        dispatch({ type: ADD_FOLDER, payload: data });
    } catch (error) {
        console.error('Failed to add folder:', error);
    }
};



export const addFile = (data) => async (dispatch) => {
    try {
        dispatch({ type: ADD_FILE, payload: data });
    } catch (error) {
        console.error('Failed to add file:', error);
    }
}


export const setInitialNoteData = () => async (dispatch) => {
    const currentNoteInLocalDB = getCurrentNoteFromLocal();
    if(currentNoteInLocalDB){
        dispatch(setCurrentNote(currentNoteInLocalDB));
        return { id: currentNoteInLocalDB };
    }
}



export const getNotesAndSet = (data, cache, flagSkipNotes = false) => async (dispatch) => {
    try {
        const notesList = checkInFileCache(cache, data) || await notes.getNotes(data);
        dispatch({ type: GET_NOTES, payload: notesList });
        
        if(flagSkipNotes){
            return { notes: notesList };
        }

        if(notesList.length){
            const currentNoteInLocalDB = getCurrentNoteFromLocal();
            const selectedNote = currentNoteInLocalDB || notesList[0].id;
            dispatch(setCurrentNote(selectedNote));
            return { notes: notesList, id: selectedNote };
        }
    } catch (error) {
        console.error('Failed to get notes:', error);
    }
};



export const saveNote = (data) => async (dispatch) => {
    try {
        const newNote = await notes.saveNote(data);
        dispatch({ type: ADD_NOTE, payload: newNote });
        dispatch(setCurrentNote(newNote.id));
        return newNote;
    } catch (error) {
        console.error('Failed to save note:', error);
    }
};


export const updateNote = (data, id) => async (dispatch) => {
    try {
        const newNote = await notes.updateNote(data, id);
        dispatch({ type: UPDATE_NOTE, payload: newNote });
        return newNote;
    } catch (error) {
        console.error('Failed to get folder:', error);
    }
};


export const deleteNote = (data) => async (dispatch) => {
    const { noteId } = data;
    try {
        await notes.deleteNote(data);
        dispatch({ type: REMOVE_NOTE, payload: noteId });
        return true;
    } catch (error) {
        console.error('Failed to delete note:', error);
        throw error;
    }
};
