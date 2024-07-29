export const normalizeData = (data=[]) => {
    const normalizedData = {
        folders: {},
        files: {},
        notes: {}
    };

    data.forEach(folder => {
        const { id: folderId, name, files=[] } = folder;
        normalizedData.folders[folderId] = { id: folderId, name, files: files.map(file => file.id) };

        files.forEach(file => {
            const { id: fileId, name, notes=[] } = file;
            normalizedData.files[fileId] = { id: fileId, name, folderId, notes: notes.map(note => note.id) };

            notes.forEach(note => {
                const { id, name } = note;
                normalizedData.notes[note.id] = { id, fileId, name };
            });
        });
    });

    return normalizedData;
};
