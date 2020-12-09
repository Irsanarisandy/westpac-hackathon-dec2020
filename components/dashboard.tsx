import React from 'react';
import styles from '../styles/dashboard.module.css';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import RatingTable from '../components/table';
import Recommender from '../components/recommender';
import ProfileCard from '../components/ProfileCard';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            paddingTop: "20px",
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,

        },
    }),
);

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <Paper elevation={2} >
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                >

                    <Grid item xs={5}>
                        <Paper className={classes.paper}>
                            </Paper>
                    </Grid>

                    <Grid item xs={7}>
                        <Paper className={classes.paper}>
                            <RatingTable/>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Recommender/>
                    </Paper>
                </Grid>
            </Paper>
        </div>

    )

}

