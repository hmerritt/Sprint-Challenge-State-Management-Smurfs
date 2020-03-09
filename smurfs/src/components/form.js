import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSmurf } from "../actions/";

const Form = () => {

    const dispatch = useDispatch();

    const [smurf, setSmurf] = useState({});

    const handleChange = evt => {
        evt.preventDefault();
        setSmurf({
            ...smurf,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        setSmurf({});
        dispatch(addSmurf(smurf));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                required
                onChange={handleChange}
            />
            <input
                type="text"
                name="height"
                placeholder="Height"
                required
                onChange={handleChange}
            />
            <input type="submit" />
        </form>
    );
};

export default Form;
