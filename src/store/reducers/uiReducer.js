import { MODES } from "_constants/UIPreferences";

const initialState = {
    theme: MODES.system,
    fontMode: '', // casual|classy,
    navigatorMode: 'compact' // compact|tree
};

const uiReducer = (state = initialState, action={}) => {
    const { type, payload } = action;
    switch (type) {
        case 'USER_PREFERENCES':
            return { ...state, ...payload };

        case 'RESET':
            return initialState;    
        
        default: 
            return state;
    }
}

export default uiReducer;