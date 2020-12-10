import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import RatingSection from './RatingSection';
import Recommender from './Recommender';
import Chart from './Chart';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    dataSection: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    content: {
      color: theme.palette.text.secondary,
      padding: theme.spacing(2),
      textAlign: 'center'
    },
    break: {
      border: '1px dotted black',
      width: 'calc(100% - 40px)'
    }
  }),
);

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid item className={classes.dataSection} spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className={classes.content}>
            <Chart />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.content}>
            <RatingSection />
          </div>
        </Grid>
      </Grid>
      <hr className={classes.break} />
      <Grid item xs={12}>
        <div className={classes.content}>
          <Recommender />
        </div>
      </Grid>
    </Paper>
  );
}
