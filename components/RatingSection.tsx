// @ts-ignore
import React, {useContext} from 'react';
import { UserContext } from '../contexts/user.context';

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
  const [user, setUser] = useContext(UserContext);
  return (
    <div className={classes.ratingSection}>
      <span>Income</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          value={user.rating[0].data.A * 100}
        />
        <span>{user.rating[0].data.A * 100}%</span>
      </div>

      <span>credit score</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          value={user.rating[0].data.B * 100}
        />
        <span>{user.rating[0].data.B * 100}%</span>
      </div>
      <span>loyalty points</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          value={user.rating[0].data.C * 100}
        />
        <span>{user.rating[0].data.C * 100}%</span>
      </div>
      <span>net saving</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          value={user.rating[0].data.D * 100}
        />
        <span>{user.rating[0].data.D * 100}%</span>
      </div>
      <span>frequent user</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          value={user.rating[0].data.E * 100}
        />
        <span>{user.rating[0].data.E * 100}%</span>
      </div>
    </div>
  );
}
