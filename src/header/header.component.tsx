// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import { makeStyles } from '@material-ui/core/styles';
// import Toolbar from '@material-ui/core/Toolbar';
// import MenuIcon from '@material-ui/icons/Menu';
import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  logo: {
    display: 'flex',
    width: '150px',
    // height: '82px',
    // backgroundSize: '100px, 82px',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
  },
  firstItem: {
    marginRight: '30px',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerCustom: {
    padding: '1em 2em',
  },
}));

export const Header = (): JSX.Element => {
  const classes = useStyles();

  return (
    <header className={classes.headerCustom}>
      <Container>
        <nav id="nave" role="navigation" className={classes.navbar}>
          <a href="/">
            <img src="/icons/logo.svg" alt="chess queen" className={classes.logo} />
          </a>
          <ul className={classes.navList}>
            <li className={classes.firstItem}>
              <a href="/">
                <Typography variant="h6">
                  <b>Projeto</b>
                </Typography>
              </a>
            </li>
            <li>
              <a>
                <Typography variant="h6">
                  <b>Aplicação</b>
                </Typography>
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
