// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import { makeStyles } from '@material-ui/core/styles';
// import Toolbar from '@material-ui/core/Toolbar';
// import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  logo: {
    display: 'flex',
    width: '50px',
    height: '82px',
    backgroundSize: '100px, 82px',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
  },
  firstItem: {
    marginRight: '30px',
  },
  navCustom: {
    display: 'flex',
    alignItems: 'center',
  },
  headerCustom: {
    padding: '1em 2em',
  },
}));

export const Header = (): JSX.Element => {
  const classes = useStyles();

  return (
    <header className={classes.headerCustom}>
      <nav id="nave" role="navigation" className={classes.navCustom}>
        <a href="">
          <img src="/icons/crown.svg" alt="chess queen" className={classes.logo} />
        </a>
        <ul className={classes.navList}>
          <li className={classes.firstItem}>
            <a>
              <b>PROJETO</b>
            </a>
          </li>
          <li>
            <a>
              <b>APLICACAÇÃO</b>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
