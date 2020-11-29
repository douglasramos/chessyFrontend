import { Button, Container, Grid, Typography } from '@material-ui/core';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Chessboard from 'chessboardjsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionTitle: {
    flexGrow: 1,
    lineHeight: '90px',
  },
  sectionContent: {
    textAlign: 'center',
    fontSize: '24px',
    lineHeight: '36px',
  },
  sectionLinks: {
    backgroundColor: ' #edebe9',
  },
  authorsSection: {},
  main: {
    alignItems: 'center',
  },
  mainContent: {
    flexBasis: 'unset',
    textAlign: 'left',
  },
  mainSection: {
    backgroundImage: 'linear-gradient(#fff, #edebe9)',
    height: '500px',
  },
  ctaButton: {
    width: '250px',
    height: '50px',
    justifyContent: 'left',
    borderRadius: '16px',
    fontSize: '20px',
    textTransform: 'capitalize',
  },
  paragraph: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  aboutSection: {
    height: '450px',
    alignItems: 'center',
    display: 'flex',
  },

  imageButton: {
    position: 'absolute',
    right: '-100px',
    width: '200px',
  },
}));

export const ProjectPage = (): JSX.Element => {
  const classes = useStyles();

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
    <div className={classes.root}>
      <section className={classes.mainSection}>
        <Container>
          <Grid container justify="space-between" className={classes.main}>
            <Grid item md={7} className={classes.mainContent}>
              <Typography variant="h2">
                <b>Capture os melhores momentos do seu xadrez</b>
              </Typography>
              <p className={classes.paragraph}>
                A nossa IA analisa os comentários da sua partida e te traz os melhores momentos pra
                que você consiga estudar os seus lances e melhorar no xadrez
              </p>
              <MuiThemeProvider theme={buttonTheme}>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className={classes.ctaButton}
                >
                  Inicie Agora
                  <img className={classes.imageButton} src="/icons/arrow.svg" alt="arrow" />
                </Button>
              </MuiThemeProvider>
            </Grid>
            <Grid item md={5} className={classes.mainContent}>
              <Chessboard position="start" width={450} />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.aboutSection}>
        <Container>
          <Typography variant="h3" className={classes.sectionTitle}>
            Sobre o projeto
          </Typography>
          <p className={classes.sectionContent}>
            A chessy é resultado do projeto de conclusão de curso dos alunos Douglas Ramos, Pedro
            Brito e Rafael Seiji, com orientação do professor Glauber Rocha, pelo Escola Politécnica
            da univesidade de São Paulo, 2020. O trabalho versa sobre o estudo do uso de modelos de
            processamento de linguagem natural em partidas de xadrez, a fim de detectar pontos de
            viradas (ou melhores momentos) de uma partida.
          </p>
        </Container>
      </section>

      <section className={`${classes.sectionLinks}`}>
        <Container>
          <Typography variant="h3" className={classes.sectionTitle}>
            Links Úteis
          </Typography>
          <ul className={classes.sectionContent}>
            <li>Monografia</li>
            <li>Vídeo de Apresentação</li>
            <li>Repositório Github Modelo NLP + Infraestrutura</li>
            <li>Repositório Github Backend</li>
            <li>Repositório Github Frontend</li>
          </ul>
        </Container>
      </section>

      <section className={`${classes.authorsSection}`}>
        <Container>
          <Typography variant="h3" className={classes.sectionTitle}>
            Autores
          </Typography>
          <ul className={classes.sectionContent}>
            <li>Douglas Ramos</li>
            <li>Pedro Brito</li>
            <li>Rafael Seiji</li>
            <li>Glauber Rocha</li>
          </ul>
        </Container>
      </section>
    </div>
  );
};
