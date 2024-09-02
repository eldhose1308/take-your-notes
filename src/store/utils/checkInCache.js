export const checkInFolderCache = (cache={}, folderId) => {
    const { files={} } = cache[folderId] || {};
    const filesWithoutNotes = Object.values(files).map(({ notes, ...remaining }) => ({ ...remaining }));
    return filesWithoutNotes.length ? filesWithoutNotes : null;
}

export const checkInFileCache = (cache={}, { folderId, fileId }) => {
    const { files={}} = cache[folderId] || {};
    const { notes={} } = files[fileId] || {};
    const notesData = Object.values(notes);
    return notesData.length ? notesData : null;
}

