import { useDispatch } from 'react-redux';
import { removeFolderHierarchy, saveFolderHierarchy, updateFolderHierarchy } from 'store/actions/folderActions';
import { confirmDeleteBox, showFolderCreateModal } from 'store/actions/modalActions';

const useFolderCrud = () => {
    const dispatch = useDispatch();

    const handleSubmit = async (folderName, folderId) => {
        const payload = {
            folder_name: folderName
        }
        if (folderId) {
            await dispatch(updateFolderHierarchy(payload, folderId));
            return;
        }
        await dispatch(saveFolderHierarchy(payload));
    }

    const showCreateDialog = (folderArg) => {
        const folderName = typeof folderArg === 'string' ? folderArg : '';
        const dialogData = {
            data: { folderName },
            status: true,
            onClick: handleSubmit
        }
        dispatch(showFolderCreateModal(dialogData))
    }

    const showUpdateDialog = (id, option, e) => {
        e.stopPropagation();

        const { id: folderId, label: folderName } = option;
        const dialogData = {
            data: { id: folderId, folderName },
            status: true,
            onClick: handleSubmit
        }
        dispatch(showFolderCreateModal(dialogData))
    }

    const handleDelete = async (id) => {
        if (!id) { return }
        try {
            dispatch(removeFolderHierarchy(id));
            return true;
        } catch (err) {
            throw err;
        }

    }

    const showDeleteDialog = (id, option, e) => {
        e.stopPropagation();
        const confirmBoxData = {
            id,
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

export default useFolderCrud;