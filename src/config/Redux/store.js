/**
 * Redux Configuration
 * with Redux Persist
 */

import { createStore, applyMiddleware } from 'redux';

// for redux persist storage
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

// import all reducers root
import rootReducers from './reducers'


/* ========================= SETUP PERSIST CONFIGURATION ========================= */
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(
    persistedReducer,
    applyMiddleware(promiseMiddleware, logger)
);

const persistor = persistStore(store);

export default { store, persistor }