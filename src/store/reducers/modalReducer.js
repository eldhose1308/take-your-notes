const initialState = {
    deleteConfirmBox: { status: false },
    createFolderModal: { status: false },
    createFileModal: { status: false },
    createCategoryModal: {status: false},
};

const modalReducer = (state = initialState, action={}) => {
    const { type, payload } = action;
    switch (type) {
        case 'DELETE_CONFIRM_BOX':
            return { ...state, deleteConfirmBox: payload };
            
        case 'CREATE_FOLDER_MODAL':
            return { ...state, createFolderModal: payload };

        case 'CREATE_CATEGORY_MODAL':
            return { ...state, createCategoryModal: payload };
    
        case 'CREATE_FILE_MODAL':
            return { ...state, createFileModal: payload };


        case 'CLOSE_MODALS':
            return initialState;    
        
        case 'RESET_STATE':
            return initialState;
                    
        default: 
            return state;
    }
}

export default modalReducer;