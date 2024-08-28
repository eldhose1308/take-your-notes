import * as notes from "_services/notes.service";
import { ADD_FILE, ADD_FOLDER, ADD_NOTE, GET_NOTES, REMOVE_NOTE, SET_CURRENT_FILE, SET_CURRENT_FOLDER, SET_CURRENT_NOTE, SET_IS_NOTE_ADDING, UPDATE_NOTE } from "store/actionTypes/notesActionTypes";


export const setIsNoteAdding = (status = true) => async (dispatch) => {
    dispatch({ type: SET_IS_NOTE_ADDING, payload: status });
}


export const setCurrentFolder = (data) => async (dispatch) => {
    dispatch({ type: SET_CURRENT_FOLDER, payload: data });
}

export const setCurrentFile = (data) => async (dispatch) => {
    dispatch({ type: SET_CURRENT_FILE, payload: data });
}

export const setCurrentNote = (data) => async (dispatch) => {
    dispatch({ type: SET_CURRENT_NOTE, payload: data });
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


export const getNotesAndSet = (data) => async (dispatch) => {
    try {
        const notesList = await notes.getNotes(data);
        dispatch({ type: GET_NOTES, payload: notesList });
        
        if(notesList.length){
            dispatch(setCurrentNote(notesList[0]))
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
        throw error;
        console.error('Failed to delete note:', error);
    }
};