import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  logo: {
    display: 'flex',
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
              <Link to="/">
                <Typography variant="h6">
                  <b>Projeto</b>
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/application">
                <Typography variant="h6">
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
