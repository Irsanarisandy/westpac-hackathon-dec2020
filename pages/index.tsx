import { GetStaticProps } from 'next';
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { getSortedPostsData } from '../lib/posts';
import ProfileCard from '../components/ProfileCard';
import Dashboard from '../components/Dashboard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: 'calc(100vh - 20px)',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
      margin: 8,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minHeight: '100%'
    },
  }),
);

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Paper elevation={2} > */}
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={3}>
          <ProfileCard />
        </Grid>

        <Grid item xs={9}>
          <Dashboard />
        </Grid>
      </Grid>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
