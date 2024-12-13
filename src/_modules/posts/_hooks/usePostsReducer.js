import { VISIBILITY_MODES, EMPTY_POST_TITLE } from "../_constants/posts";
import { POST_ACTIONS } from "../_constants/postReducerActionTypes";

export const initialState = {
    postTags: [],
    currentVisibilityMode: VISIBILITY_MODES.public,
    postTitle: EMPTY_POST_TITLE,
    postCategory: null,
    markdownContent: '',
};


const postFormReducer = (state, { type, payload }) => {
    switch (type) {
        case POST_ACTIONS.SET_FIELDS:
            return { ...state, ...payload };
        case POST_ACTIONS.SET_TAGS:
            return { ...state, postTags: payload };
        case POST_ACTIONS.SET_VISIBILITY:
            return { ...state, currentVisibilityMode: payload };
        case POST_ACTIONS.SET_CONTENT:
            return { ...state, markdownContent: payload };
        case POST_ACTIONS.SET_TITLE:
            return { ...state, postTitle: payload };
        case POST_ACTIONS.SET_CATEGORY:
            return { ...state, postCategory: payload };
        case POST_ACTIONS.RESET_FORM:
            return initialState;
        default:
            return state;
    }
};

export default postFormReducer
