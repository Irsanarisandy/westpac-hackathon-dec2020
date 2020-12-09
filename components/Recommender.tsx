import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    textAlign: 'left'
  },
  bullet: {
    paddingLeft: 20
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Recommender() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h2">
        Recommender
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        some bullshit sits here
      </Typography>
      <ul className={classes.bullet}>
        <li>
          well meaning and kindly
        </li>
        <li>
          {'"a benevolent smile"'}
        </li>
      </ul>
    </div>
  );
}
