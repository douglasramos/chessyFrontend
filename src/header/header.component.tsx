import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      marginRight: '30px',
    },
    width: '150px',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    '& a': {
      textDecoration: 'none',
      color: '#545454fc',
      '&:hover': {
        color: 'black',
      },
    },
    fontSize: 8,
  },
  firstItem: {
    marginRight: '30px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '15px',
    },
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
    },
  },
  headerCustom: {
    [theme.breakpoints.up('sm')]: {
      padding: '1em 2em',
    },
    padding: '0.5em 1em',
  },
  navItems: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
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
              <Link to="/">
                <Typography variant="h6" className={classes.navItems}>
                  <b>Projeto</b>
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/application">
                <Typography variant="h6" className={classes.navItems}>
                  <b>Aplicação</b>
                </Typography>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
