import React from "react";
import Header from "./header";
import Form from "./form";
import Smurfs from "./smurfs";
import { Container } from "@material-ui/core";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />

            <Container>
                <Form />
                <Smurfs />
            </Container>
        </div>
    );
};

export default App;
