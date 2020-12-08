import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chessboard from 'chessboardjsx';
import React from 'react';
import { isMobile } from 'react-device-detect';

import { CtaButton } from '../../cta-button/cta-button.component';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundImage: 'linear-gradient(#fff, #edebe9)',
  },
  main: {
    alignItems: 'center',
  },
  mainContent: {
    flexBasis: 'unset',
    textAlign: 'left',
  },

  ctaButton: {
    width: '250px',
    height: '50px',
    justifyContent: 'left',
    borderRadius: '16px',
    fontSize: '20px',
    textTransform: 'capitalize',
  },
  subtitle: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  aboutSection: {
    alignItems: 'center',
    display: 'flex',
  },
  techImages: {
    width: '500px',
  },
  leftContent: {
    textAlign: 'left',
  },
}));

export const MainSection = (): JSX.Element => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container>
        <Grid container justify="space-between" className={classes.main}>
          <Grid item xs={12} md={7} className={classes.mainContent}>
            <Typography variant="h2">
              <b>Capture os melhores momentos do seu xadrez</b>
            </Typography>
            <p className={classes.subtitle}>
              A nossa IA analisa os comentários da sua partida e te traz os melhores momentos pra
              que você consiga estudar os seus lances e melhorar no xadrez
            </p>
            <CtaButton showActionArrow={true} />
          </Grid>
          {!isMobile && (
            <Grid item md={5} className={classes.mainContent}>
              <Chessboard position="start" width={450} />
            </Grid>
          )}
        </Grid>
      </Container>
    </section>
  );
};
