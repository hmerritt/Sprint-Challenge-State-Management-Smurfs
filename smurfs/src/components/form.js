import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSmurf } from "../actions/";
import { TextField, Button } from "@material-ui/core";

const Form = () => {

    const dispatch = useDispatch();

    const [smurf, setSmurf] = useState({
        name: "",
        age: 0,
        height: ""
    });

    const handleChange = evt => {
        evt.preventDefault();
        setSmurf({
            ...smurf,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        setSmurf({
            name: "",
            age: 0,
            height: ""
        });
        dispatch(addSmurf(smurf));
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                type="text"
                name="name"
                label="Name"
                variant="outlined"
                value={smurf.name}
                onChange={handleChange}
                required
            />
            <TextField
                type="number"
                name="age"
                label="Age"
                variant="outlined"
                value={smurf.age}
                onChange={handleChange}
                required
            />
            <TextField
                type="text"
                name="height"
                label="Height"
                variant="outlined"
                value={smurf.height}
                onChange={handleChange}
                required
            />
            <Button type="submit" variant="contained" color="primary">Add Smurf</Button>
        </form>
    );
};

export default Form;
