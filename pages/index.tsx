import { GetStaticProps } from 'next';
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
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
      margin: 10,
    }
  }),
);

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={4} md={3}>
          <ProfileCard />
        </Grid>

        <Grid item xs={12} sm={8} md={9}>
          <Dashboard />
        </Grid>
      </Grid>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
