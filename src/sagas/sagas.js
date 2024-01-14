import { put, takeEvery, all } from 'redux-saga/effects'
export function* asyncIncreement(){

}

export function* watcherAsyncIncreement(){

}

export function* asyncDeccreement(){

}

export function* watcherAsyncDecreement(){
    takeaway

}

export default function* reetSaga(){
    yield all([
        watcherAsyncIncreement(),
        watcherAsyncDecreement()
    ])
}