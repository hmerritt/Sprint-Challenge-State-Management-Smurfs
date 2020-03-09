import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE
} from "../actions/";

const initialValue = {
    isLoading: false,
    hasFailed: false,
    smurfs: []
};

export const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: [ ...state.smurfs, ...action.payload ]
            }

        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                hasFailed: true
            }

        default:
            return state;
    }
};
