import React from "react";
import Header from "./header";
import Form from "./form";
import Smurfs from "./smurfs";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Form />
            <Smurfs />
        </div>
    );
};

export default App;
