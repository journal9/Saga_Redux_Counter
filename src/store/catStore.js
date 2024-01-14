import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import catsReducer from './catSlice'

const catsSaga = createSagaMiddleware()

const catStore = configureStore({
    reducer:{
        cats: catsReducer
    },
    middleware:[catsSaga]
})

export default catStore