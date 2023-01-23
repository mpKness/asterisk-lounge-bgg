import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/user';
import collectionReducer from './slices/collection';
import boardgameReducer from './slices/boardgames';
import optionsReducer from './slices/options';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import persistReducer from "redux-persist/es/persistReducer";
import thunk from 'redux-thunk'

const reducers = combineReducers({
    boardgame: boardgameReducer,
    collection: collectionReducer,
    user: userReducer,
    options: optionsReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});
