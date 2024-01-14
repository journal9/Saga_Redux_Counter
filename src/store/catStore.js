import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import catsReducer from './catSlice';
import catsSaga from '../sagas/sagas';

const saga = createSagaMiddleware()

const catStore = configureStore({
    reducer:{
        cats: catsReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
})
saga.run(catsSaga)

export default catStore