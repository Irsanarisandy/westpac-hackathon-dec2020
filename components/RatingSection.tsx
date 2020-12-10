// @ts-ignore
import React, {useContext} from 'react';
import LinearProgressWithLabel from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

import { UserContext } from '../contexts/user.context';
import { Captions } from '../contexts/seed';

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
  const [user, setUser] = useContext(UserContext);
  return (
    <div className={classes.ratingSection}>
      <span>{Captions.A}</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          // @ts-ignore
          value={user.rating[0].data.A * 100}
        />
        <span>
          {
            // @ts-ignore
            user.rating[0].data.A * 100
          }%
        </span>
      </div>
      <span>{Captions.B}</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          // @ts-ignore
          value={user.rating[0].data.B * 100}
        />
        <span>
          {
            // @ts-ignore
            user.rating[0].data.B * 100
          }%
        </span>
      </div>
      <span>{Captions.C}</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          // @ts-ignore
          value={user.rating[0].data.C * 100}
        />
        <span>
          {
            // @ts-ignore
            user.rating[0].data.C * 100
          }%
        </span>
      </div>
      <span>{Captions.D}</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          // @ts-ignore
          value={user.rating[0].data.D * 100}
        />
        <span>
          {
            // @ts-ignore
            user.rating[0].data.D * 100
          }%
        </span>
      </div>
      <span>{Captions.E}</span>
      <div className={classes.ratings}>
        <LinearProgressWithLabel
          className={classes.ratingProgress}
          variant="determinate"
          // @ts-ignore
          value={user.rating[0].data.E * 100}
        />
        <span>
          {
            // @ts-ignore
            user.rating[0].data.E * 100
          }%
        </span>
      </div>
    </div>
  );
}
