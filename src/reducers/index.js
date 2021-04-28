import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import imageReducer from './imageReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
    load: loadingReducer,
    image: imageReducer,
    err: errorReducer,
    next: pageReducer,
    imgStats: statsReducer,
});

export default rootReducer;
