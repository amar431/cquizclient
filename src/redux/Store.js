import { configureStore,combineReducers } from '@reduxjs/toolkit';
 import userReducer from "./user/userSlice"
import questionReducer from './quizReducer';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'
import resultReducer from './resultReducer';

const rootReducer = combineReducers({
    questions: questionReducer,
    result:resultReducer,
    user:userReducer
})
const persistConfig = {
    key: 'root',
    storage,
    version:1,

}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store  = configureStore({
    reducer:persistedReducer,
  middleware:(buildGetDefaultMiddleware)=>
  buildGetDefaultMiddleware({
    serializableCheck:false,
  }),
})

export const persistor = persistStore(store)
