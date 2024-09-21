import * as notes from '_api/notes.api'

export const formatNoteData = (data) => {
    const { title, content, note_id, folder_id, file_id } = data;
    const formattedResponse = { title, content, id: note_id, noteId: note_id, folderId: folder_id, fileId: file_id };
    return formattedResponse;
}

const getNotes = async (data, config={}) => {
    const response = await notes.getNotes(data, config);
    const { data: notesData=[] } = response;
    const filesFormatted = notesData.map(formatNoteData)
    return filesFormatted || []
}


const getNoteById = async (id, config={}) => {
    const response = await notes.getNoteById(id, config)
    return response || []
}


const saveNote = async (data, config={}) => {
    const response = await notes.saveNote(data, config);
    const { data: noteData=[] } = response;
    return formatNoteData(noteData)
}



const updateNote = async (data, id, config={}) => {
    const response = await notes.updateNote(data, id, config);
    const { data: noteData=[] } = response;
    return formatNoteData(noteData);
}

const deleteNote = async (id, config={}) => {
    const response = await notes.deleteNote(id, config)
    return response
}

export {
    getNotes,
    getNoteById,
    saveNote,
    updateNote,
    deleteNote
}