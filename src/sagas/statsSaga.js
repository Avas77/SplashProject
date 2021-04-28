import * as actionTypes from '../constants';
import { fork, put, take, call } from 'redux-saga/effects';
import {
    imageStatsLoad,
    setImageStats,
    setImageStatsError,
} from '../actions/actions';
import { fetchImageStats } from '../api';

function* handleStatRequest(id) {
    for (let i = 0; i < 3; i++) {
        try {
            yield put(imageStatsLoad(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStats(id, res.downloads.total));
            return true;
        } catch (error) {}
    }
    yield put(setImageStatsError(id));
}

function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(actionTypes.LOAD_SUCCESS);
        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatRequest, images[i].id);
        }
    }
}

export default watchStatsRequest;
