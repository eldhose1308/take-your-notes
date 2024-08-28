// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';

// import rootReducer from 'store/reducers/rootReducer';

// const store = configureStore({ reducer: rootReducer });

// export default store;

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from 'store/reducers/rootReducer';

const loggerMiddleware = (store) => (next) => (action) => {
    console.groupCollapsed(`@action/${action.type}`);
    console.log('%c Previous State:', 'color: gray', store.getState());
    console.log('%c Action:', 'color: #ccddee', action);
    const result = next(action);
    console.log('%c Next State:', 'color: green', store.getState());
    console.groupEnd();
    return result;
};



const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

export default store;
