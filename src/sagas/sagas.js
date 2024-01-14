import { put, takeEvery, call } from 'redux-saga/effects'
import { getCatsSuccess } from '../store/catSlice';

function* workcatsFetch(){
    const cats = yield call(()=>fetch('https://api.thecatapi.com/v1/breeds'));
    const formattedCats = yield cats.json();
    const returnedCats = formattedCats.slice(0,10);
    yield put(getCatsSuccess(returnedCats));
}

function* catSaga(){
    yield takeEvery('cats/getCatsFetch',workcatsFetch);
}

export default catSaga;