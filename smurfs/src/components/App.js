import React from "react";
import Header from "./header";
import Form from "./form";
import Smurfs from "./smurfs";
import Stats from "./stats";
import { Container } from "@material-ui/core";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />

            <Container>
                <Stats />
                <Form />
                <Smurfs />
            </Container>
        </div>
    );
};

export default App;
