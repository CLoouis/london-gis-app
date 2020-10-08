import React, { useState } from 'react';
import { Grid, IconButton } from "@material-ui/core";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    start: {
        textAlign: "start",
    },
    end: {
        textAlign: "end",
    },
    nav: {
        textAlign: "center"
    }
}))

const Navigation = (props) => {
    const classes = useStyles();
    const { number, setNumber, total} = props;

    const increaseNumber = () => {
        setNumber(number + 1);
    }

    const decreaseNumber = () => {
        setNumber(number - 1);
    }

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={2} className={classes.end}>
                <IconButton onClick={decreaseNumber} disabled={number === 1}>
                    <ArrowBackIosOutlinedIcon />
                </IconButton>
            </Grid>
            <Grid item xs={4} className={classes.nav}>
                {number} / {total}
            </Grid>
            <Grid item xs={2} className={classes.start}>
                <IconButton onClick={increaseNumber} disabled={number === total}>
                    <ArrowForwardIosOutlinedIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Navigation;