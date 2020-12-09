import React, { useContext } from 'react';
import { UserContext } from '../contexts/user.context';

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
  const [user, setUser] = useContext(UserContext);


  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h2">
        Recommender
      </Typography>
      <ul className={classes.bullet}>
        {
          // @ts-ignore
          user.recommender.map((recom, idx) =>
            <li key={idx}>
              {recom}
            </li>
          )
        }
      </ul>
    </div>
  );
}
