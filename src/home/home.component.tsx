import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  text: {
    flexGrow: 1,
    textAlign: 'center',
    lineHeight: '90px',
    marginTop: '200px',
  },
}));

export const Home = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.text}>
        O monstro tá saindo da jaula
      </Typography>
    </div>
  );
};
