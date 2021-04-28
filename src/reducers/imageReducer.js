import * as actionTypes from '../constants/index';

const imageReducer = (state = [], action) => {
    if (action.type === actionTypes.LOAD_SUCCESS) {
        return [...state, ...action.images];
    }
    return state;
};

export default imageReducer;
