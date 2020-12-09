import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgressWithLabel from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  ratingSection: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    zIndex:-10,
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
<<<<<<< HEAD

      <span>McDonalds</span>
=======
      <span>Nando's</span>
>>>>>>> d9253044e7d5cb2adfb7f5eec0f3f9ef8399ea3b
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          value={50}
        />
        <span>5/10</span>
      </div>
<<<<<<< HEAD

      <span>McDonalds</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          value={50}
        />
        <span>5/10</span>
      </div>

=======
>>>>>>> d9253044e7d5cb2adfb7f5eec0f3f9ef8399ea3b
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
