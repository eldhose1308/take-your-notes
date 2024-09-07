import { useDispatch } from 'react-redux';
import { removeFileHierarchy, saveFileHierarchy, updateFileHierarchy } from 'store/actions/fileActions';
import { confirmDeleteBox, showFileCreateModal } from 'store/actions/modalActions';
import { setIsNoteAdding, setIsNoteAddingFor } from 'store/actions/notesActions';

const useNotesCrud = (folderId, fileId) => {
    const dispatch = useDispatch();

    const handleSubmit = async (fileName, fileId) => {
        const payload = {
            file_name: fileName,
            folderId
        }
        if (fileId) {
            await dispatch(updateFileHierarchy(payload, fileId));
            return;
        }
        await dispatch(saveFileHierarchy(payload));
    }

    const setNoteCreate = (data) => {
        dispatch(setIsNoteAddingFor(folderId, fileId));
    }

    const showUpdateDialog = (id, folderId, option, e) => {
        e.stopPropagation();

        const { id: fileId, label: fileName } = option;
        const dialogData = {
            data: { id: { fileId, folderId }, fileName },
            status: true,
            onClick: handleSubmit
        }
        dispatch(showFileCreateModal(dialogData))
    }

    const handleDelete = async (id) => {
        const { id: fileId, folderId } = id;
        if (!fileId || !folderId) { return }
        try {
            // dispatch(removeFileHierarchy({ fileId, folderId }));
            alert('Todo')
            return true;
        } catch (err) {
            throw err;
        }

    }

    const showDeleteDialog = (id, folderId, option, e) => {
        e.stopPropagation();
        const confirmBoxData = {
            id: { id, folderId },
            status: true,
            onClick: handleDelete
        }
        dispatch(confirmDeleteBox(confirmBoxData))
    }

    return {
        setNoteCreate,
        showUpdateDialog,
        showDeleteDialog
    }
}

export default useNotesCrud;