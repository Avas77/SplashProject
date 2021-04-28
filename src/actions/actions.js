import * as actionTypes from '../constants/';

export const imagesLoad = () => {
    return {
        type: actionTypes.LOAD,
    };
};

export const imagesLoadSuccess = images => {
    return {
        type: actionTypes.LOAD_SUCCESS,
        images,
    };
};

export const imagesLoadFail = err => {
    return {
        type: actionTypes.LOAD_FAIL,
        err,
    };
};

export const imageStatsLoad = id => {
    return {
        type: actionTypes.STATS,
        id,
    };
};

export const setImageStats = (id, downloads) => {
    return {
        type: actionTypes.STATS_SUCCESS,
        id,
        downloads,
    };
};

export const setImageStatsError = id => {
    return {
        type: actionTypes.STATS_FAIL,
        id,
    };
};
