import { combineReducers } from 'redux';

import notesReducer from './notesReducer';
import modalReducer from './modalReducer';
// import foldersReducer from './foldersReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  modals: modalReducer
});

export default rootReducer;
