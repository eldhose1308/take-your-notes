import { combineReducers } from 'redux';

import notesReducer from './notesReducer';
import modalReducer from './modalReducer';
import drawerReducer from './drawerReducer';
// import foldersReducer from './foldersReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  modals: modalReducer,
  drawers: drawerReducer
});

export default rootReducer;
