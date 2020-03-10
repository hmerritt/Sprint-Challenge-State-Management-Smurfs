import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const getSmurfs = () => dispatch =>
{
    //  Start fetch
    dispatch({ type: FETCH_SMURFS_START });

    //  Get data from API
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(res => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
        });
};


export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";

export const addSmurf = (smurf) => dispatch =>
{
    //  Start fetch
    dispatch({ type: POST_SMURF_START, payload: smurf });

    //  Get data from API
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            dispatch({ type: POST_SMURF_SUCCESS });
        })
        .catch(res => {
            dispatch({ type: POST_SMURF_FAILURE });
        });
};
