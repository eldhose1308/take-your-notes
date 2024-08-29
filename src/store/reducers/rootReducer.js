import { combineReducers } from 'redux';

import notesReducer from './notesReducer';
import modalReducer from './modalReducer';
import drawerReducer from './drawerReducer';
import uiReducer from './uiReducer';
// import foldersReducer from './foldersReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  modals: modalReducer,
  drawers: drawerReducer,
  preferences: uiReducer
});

export default rootReducer;
