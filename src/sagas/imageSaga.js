import { call, select, takeEvery, put } from 'redux-saga/effects';
import * as actionTypes from '../constants';
import { fetchImages } from '../api';
import { imagesLoadFail, imagesLoadSuccess } from '../actions/actions';

const getPage = state => state.next;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        console.log(images);
        yield put(imagesLoadSuccess(images));
    } catch (error) {
        yield put(imagesLoadFail(error.toString()));
    }
}

function* watchImagesLoad() {
    yield takeEvery(actionTypes.LOAD, handleImagesLoad);
}

export default watchImagesLoad;
