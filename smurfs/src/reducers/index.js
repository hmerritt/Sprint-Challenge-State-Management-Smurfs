import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE
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
        case POST_SMURF_FAILURE:
            return {
                ...state,
                isLoading: false,
                hasFailed: true
            }


        case POST_SMURF_START:
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    action.payload
                ]
            }

        default:
            return state;
    }
};
