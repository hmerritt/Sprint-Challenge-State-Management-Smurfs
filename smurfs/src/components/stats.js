import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from "@material-ui/core";
import { meanBy } from "lodash";

const Stats = () => {

    //  Get data from redux store
    const smurfs = useSelector(state => state.smurfs);

    return (
        <div className="analytics">
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Population
                            </TableCell>
                            <TableCell align="right">
                                {
                                    smurfs.length
                                }
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Average Age
                            </TableCell>
                            <TableCell align="right">
                                {
                                    meanBy(smurfs, "age").toFixed(2)
                                }
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Oldest Smurf
                            </TableCell>
                            <TableCell align="right">
                                {
                                    smurfs.reduce((max, smurf) => {
                                        return (smurf.age > max) ? smurf.age : max
                                    }, 0)
                                }
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Youngest Smurf
                            </TableCell>
                            <TableCell align="right">
                                {
                                    smurfs.reduce((min, smurf) => {
                                        return (min > smurf.age) ? smurf.age : min
                                    }, 10000000)
                                }
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Stats;
