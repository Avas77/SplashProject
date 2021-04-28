import * as actionTypes from '../constants/index';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.LOAD_FAIL:
            return action.err;
        case actionTypes.LOAD:
        case actionTypes.LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
};

export default errorReducer;
