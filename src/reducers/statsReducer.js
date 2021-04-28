import * as actionTypes from '../constants';

const statsReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.STATS:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    downloads: null,
                    err: false,
                },
            };
        case actionTypes.STATS_SUCCESS:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: action.downloads,
                    err: false,
                },
            };
        case actionTypes.STATS_FAIL:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: null,
                    err: true,
                },
            };
        default:
            return state;
    }
};

export default statsReducer;
