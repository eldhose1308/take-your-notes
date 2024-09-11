export const normalizeData = (data=[]) => {
    const normalizedData = {
        folders: {},
        files: {},
        notes: {}
    };

    data.forEach(folder => {
        const { id: folderId, label, files=[] } = folder;
        normalizedData.folders[folderId] = { id: folderId, label, files: files.map(file => file.id) };

        files.forEach(file => {
            const { id: fileId, label, notes=[] } = file;
            normalizedData.files[fileId] = { id: fileId, label, folderId, notes: notes.map(note => note.id) };

            notes.forEach(note => {
                const { id, title, content } = note;
                normalizedData.notes[note.id] = { id, fileId, folderId, title, content };
            });
        });
    });

    return normalizedData;
};
