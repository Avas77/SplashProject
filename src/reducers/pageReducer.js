import * as actionTypes from '../constants';

const pageReducer = (state = 1, action) => {
    switch (action.type) {
        case actionTypes.LOAD_SUCCESS:
            return state + 1;
        default:
            return state;
    }
};

export default pageReducer;
