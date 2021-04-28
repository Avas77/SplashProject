import * as actionTypes from '../constants/index';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case actionTypes.LOAD:
            return true;
        case actionTypes.LOAD_SUCCESS:
            return false;
        case actionTypes.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
