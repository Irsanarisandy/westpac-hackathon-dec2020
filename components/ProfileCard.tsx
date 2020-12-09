import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    border: '1px solid rgba(207,207,207,1)',
    borderRadius: 10,
    boxShadow: '9px 9px 5px 0px rgba(207,207,207,1)',
    maxWidth: 300,
  },
  searchArea: {
    display: 'flex',
    marginTop: 5
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
});

export default function ProfileCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.searchArea}>
        <TextField className={classes.searchField} label="Search Name" />
        <IconButton aria-label="menu">
          <SearchIcon />
        </IconButton>
      </div>
      <CardMedia
        className={classes.media}
        image="../images/bobmarley.jpg"
        title="Contemplative Reptile"
      />
      <CardContent className={classes.mediaDesc}>
        <h1 className={classes.mediaName}>Bob Marley</h1>
        <span>Deceased Hippy Artist</span>
      </CardContent>
    </Card>
  );
}