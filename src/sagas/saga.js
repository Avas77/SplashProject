import { all } from 'redux-saga/effects';
import watchImagesLoad from './imageSaga';
import watchStatsRequest from './statsSaga';

export default function* rootSaga() {
    yield all([watchImagesLoad(), watchStatsRequest()]);
}
