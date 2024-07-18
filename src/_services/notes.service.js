import * as notes from '_api/notes.api'

const getNotes = async (data, config={}) => {
    const response = await notes.getNotes(data, config)
    return response || []
}


const getNoteById = async (id, config={}) => {
    const response = await notes.getNoteById(id, config)
    return response || []
}


const saveNotes = async (data, config={}) => {
    const response = await notes.saveNotes(data, config)
    return response
}

const updateNotes = async (id, data, config={}) => {
    const response = await notes.updateNotes(id, data, config)
    return response
}

const deleteNote = async (id, config={}) => {
    const response = await notes.deleteNote(id, config)
    return response
}

export {
    getNotes,
    getNoteById,
    saveNotes,
    updateNotes,
    deleteNote
}