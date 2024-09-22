const initialState = {
    settingsDrawer: false
};

const drawerReducer = (state = initialState, action={}) => {
    const { type, payload } = action;
    switch (type) {
        case 'SETTINGS_DRAWER':
            return { ...state, settingsDrawer: payload };

        case 'CLOSE_DRAWERS':
            return initialState;    
        
        default: 
            return state;
    }
}

export default drawerReducer;