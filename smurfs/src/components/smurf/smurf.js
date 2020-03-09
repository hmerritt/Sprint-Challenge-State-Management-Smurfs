import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from "@material-ui/core";

const Smurf = ({ smurf }) => {

    const styles = makeStyles({
      card: {
        margin: "14px auto",
        maxWidth: "650px"
      }
  })();

    return (
        <div className="smurf">
            <Card variant="outlined" className={styles.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {smurf.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Age: {smurf.age}
                        <br />
                        Height {smurf.height}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Smurf;
