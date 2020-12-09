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
    container:{
      display:'flex',
      justify:'center',
      minHeight: '100vh',
      alignItems:'center'
    },
    root: {
      flexGrow: 1,
      margin: 10,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minHeight: '100%',


    },
  }),
);


export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>

    <div className={classes.root}>
      {/* <Paper elevation={2} > */}
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          >
          <Grid item xs={2}>
            <ProfileCard />
          </Grid>

          <Grid item xs={9}>
            <Dashboard />
          </Grid>
        </Grid>
      {/* </Paper> */}
</div>
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
