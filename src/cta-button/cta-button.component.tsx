import { Button } from '@material-ui/core';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles(() => ({
  root: {
    width: '250px',
    height: '50px',
    justifyContent: 'left',
    borderRadius: '16px',
    fontSize: '20px',
    textTransform: 'capitalize',
  },
  imageButton: {
    position: 'absolute',
    right: '-100px',
    width: '200px',
  },
}));

export interface Props {
  showActionArrow: boolean;
}

export const CtaButton = (props: Props): JSX.Element => {
  const classes = useStyles();
  const { showActionArrow } = props;

  const buttonTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#b58863',
        light: '#b58863',
        dark: '#946f51',
        contrastText: '#fff',
      },
    },
  });

  return (
    <MuiThemeProvider theme={buttonTheme}>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        className={classes.root}
        href="/application"
      >
        Inicie Agora
        {!isMobile && showActionArrow && (
          <img className={classes.imageButton} src="/icons/arrow.svg" alt="arrow" />
        )}
      </Button>
    </MuiThemeProvider>
  );
};
