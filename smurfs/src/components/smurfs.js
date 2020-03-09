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

    //  Get smurfs from redux store
    const smurfs = useSelector(state => state.smurfs);

    return (
        <div className="smurfs">
            {
                smurfs.map((smurf, key) => {
                    return <Smurf smurf={smurf} key={key} />
                })
            }
        </div>
    );
}

export default Smurfs;
