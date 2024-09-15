export const normalizeData = (data=[]) => {
    const normalizedData = {
        folders: {},
        files: {},
        notes: {}
    };

    data.forEach(folder => {
        const { id: folderId, label: folderLabel, files=[] } = folder;
        normalizedData.folders[folderId] = { id: folderId, label: folderLabel, files: files.map(file => file.id) };

        files.forEach(file => {
            const { id: fileId, label: fileLabel, notes=[] } = file;
            normalizedData.files[fileId] = { id: fileId, label: fileLabel, folderId, notes: notes.map(note => note.id) };

            notes.forEach(note => {
                const { id, title, content } = note;
                normalizedData.notes[note.id] = { id, fileId, folderId, fileLabel, folderLabel, title, content };
            });
        });
    });

    return normalizedData;
};
