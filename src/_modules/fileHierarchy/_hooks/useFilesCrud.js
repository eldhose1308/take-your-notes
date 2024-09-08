import { useDispatch } from 'react-redux';
import { removeFileHierarchy, saveFileHierarchy, updateFileHierarchy } from 'store/actions/fileActions';
import { confirmDeleteBox, showFileCreateModal } from 'store/actions/modalActions';

const useFilesCrud = (folderId) => {
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

    const showCreateDialog = (data) => {
        const dialogData = {
            data,
            status: true,
            onClick: handleSubmit
        }
        dispatch(showFileCreateModal(dialogData))
    }

    const showUpdateDialog = (id, folderId, option, e) => {
        e.stopPropagation();

        const { id: fileId, label: fileName, folderName } = option;
        const dialogData = {
            data: { id: { fileId, folderId, folderName }, fileName },
            status: true,
            onClick: handleSubmit
        }
        dispatch(showFileCreateModal(dialogData))
    }

    const handleDelete = async (id) => {
        const { id: fileId, folderId } = id;
        if (!fileId || !folderId) { return }
        try {
            dispatch(removeFileHierarchy({ id: fileId, folderId }));
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
        showCreateDialog,
        showUpdateDialog,
        showDeleteDialog
    }
}

export default useFilesCrud;