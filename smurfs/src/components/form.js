import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSmurf } from "../actions/";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const Form = () => {
    const dispatch = useDispatch();

    const [smurf, setSmurf] = useState({
        name: "",
        age: null,
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
        dispatch(
            addSmurf({
                ...smurf,
                age: Number(smurf.age)
            })
        );
        setSmurf({
            name: "",
            age: null,
            height: ""
        });
    };

    const styles = makeStyles({
        input: {
            margin: "0px 5px"
        },
        button: {
            width: "100%",
            height: "40px",
            margin: "10px 0",
        }
    })();

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                type="text"
                name="name"
                label="Name"
                variant="outlined"
                className={styles.input}
                value={smurf.name}
                onChange={handleChange}
                required
            />
            <TextField
                type="number"
                name="age"
                label="Age"
                variant="outlined"
                className={styles.input}
                value={smurf.age}
                onChange={handleChange}
                required
            />
            <TextField
                type="text"
                name="height"
                label="Height"
                variant="outlined"
                className={styles.input}
                value={smurf.height}
                onChange={handleChange}
                required
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={styles.button}
            >
                Add Smurf
            </Button>
        </form>
    );
};

export default Form;
