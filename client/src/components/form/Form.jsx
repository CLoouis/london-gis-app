import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { TextField, Button, CircularProgress, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    paper: {
        alignItems: 'center',
        textAlign: 'center',
    },
    label: {
        color: "black",
        fontSize: "large",
    },
    form: {
        display: 'inline-block',
        margin: 'auto',
    },
    button: {
        margin: "1em",
        textTransform: "none",
    }
}))

const Form = (props) => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const { setSearchName, isLoading, setIsLoading } = props;
    const onSubmit = data => {
        setSearchName(data.name)
        setIsLoading(true);
    };

    return (
        <Container className={classes.paper}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <TextField 
                            name="name"
                            label="Find Place : "
                            margin="normal"
                            InputLabelProps={{
                                className: classes.label,
                                shrink: true,
                            }}
                            inputRef={register}
                        />

                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" disabled={isLoading} className={classes.button}>
                            {isLoading ? <CircularProgress size="1.5rem" /> : "Find"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Form;
