import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSmurfs } from "../actions/";
import Smurf from "./smurf/smurf";

const Smurfs = () => {

    const dispatch = useDispatch();

    //  Get all smurfs from API
    useEffect(() => {
        dispatch(getSmurfs());
    }, []);

    //  Get data from redux store
    const smurfs = useSelector(state => state.smurfs);
    const loading = useSelector(state => state.isLoading);

    return (
        <div className="smurfs">
            {
                loading ? <Smurf smurf={{name: "Loading..."}} /> : ""
            }
            {
                smurfs.map((smurf, key) => {
                    return <Smurf smurf={smurf} key={key} />
                }).reverse()
            }
        </div>
    );
}

export default Smurfs;
