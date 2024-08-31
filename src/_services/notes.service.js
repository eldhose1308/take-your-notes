import * as notes from '_api/notes.api'

const getNotes = async (data, config={}) => {
    const response = await notes.getNotes(data, config);
    const { data: notesData=[] } = response;
    const filesFormatted = notesData.map(note => {
        const { title, content, note_id } = note;
        return { id: note_id, content, title }
    })
    return filesFormatted || []
}


const getNoteById = async (id, config={}) => {
    const response = await notes.getNoteById(id, config)
    return response || []
}


const saveNote = async (data, config={}) => {
    const response = await notes.saveNote(data, config);
    const { data: noteData=[] } = response;
    const { title, content, note_id } = noteData;
    const responseData = { title, content, id: note_id, noteId: note_id };
    return responseData
}



const updateNote = async (data, id, config={}) => {
    const response = await notes.updateNote(data, id, config);
    const { data: noteData=[] } = response;
    const { title, content, note_id } = noteData;
    const responseData = { id: note_id, content, title };
    return responseData
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