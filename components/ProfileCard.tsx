import React, { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Users } from '../contexts/seed';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid rgba(207,207,207,1)',
      borderRadius: 10,
      boxShadow: '9px 9px 5px 0px rgba(207,207,207,1)',
      // maxWidth: 300,
      height: '70vh'
    },
    searchArea: {
      display: 'flex',
      marginTop: 5,
      marginBottom: 15,
      paddingLeft: 10
    },
    selectEmpty: {
      width: '100%'
    },
    searchField: {
      width: '100%'
    },
    media: {
      height: 140,
      width: '100%'
    },
    mediaDesc: {
      textAlign: 'center'
    },
    mediaName: {
      margin: 0,
    }
  })
);

export default function ProfileCard() {
  const classes = useStyles();
  const [user, setUser] = useContext(UserContext);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // @ts-ignore
    setUser(Users[event.target.value])
  };

  return (
    <Card className={classes.root}>
      <div className={classes.searchArea}>
        <Select
          className={classes.selectEmpty}
          labelId="Client-Id"
          id="clienId"
          // @ts-ignore
          value={user.id-1}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            Select User
          </MenuItem>
          <MenuItem value={0}>User 1</MenuItem>
          <MenuItem value={1}>User 2</MenuItem>
          <MenuItem value={2}>User 3</MenuItem>
        </Select>
        <IconButton aria-label="menu">
          <SearchIcon />
        </IconButton>
      </div>
      <CardMedia
        className={classes.media}
        // @ts-ignore
        image={user.image}
        title="Profile image"
      />
      <CardContent className={classes.mediaDesc}>
        <h1 className={classes.mediaName}>
          {
            // @ts-ignore
            user.name
          }
        </h1>
        <span>
          {
            // @ts-ignore
            user.professional
          }
        </span>
      </CardContent>
    </Card>
  );
}
