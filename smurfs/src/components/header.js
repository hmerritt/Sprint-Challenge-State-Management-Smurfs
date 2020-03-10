import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Container>
                    <Typography variant="h6">SMURFS! 2.0 W/ Redux</Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
