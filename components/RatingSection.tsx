import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgressWithLabel from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  ratingSection: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  ratings: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ratingProgress: {
    marginRight: 10,
    width: '100%'
  }
});

export default function RatingSection() {
  const classes = useStyles();

  return (
    <div className={classes.ratingSection}>
      <span>Pizza Hut</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          value={50}
        />
        <span>5/10</span>
      </div>
      <span>Domino's Pizza</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          value={50}
        />
        <span>5/10</span>
      </div>
      <span>KFC</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          value={50}
        />
        <span>5/10</span>
      </div>
      <span>Nando's</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          value={50}
        />
        <span>5/10</span>
      </div>
      <span>McDonalds</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          value={50}
        />
        <span>5/10</span>
      </div>
    </div>
  );
}
