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
  sectionTitle: {
    flexGrow: 1,
    textAlign: 'left',
    lineHeight: '90px',
    paddingLeft: theme.spacing(16),
    paddingRight: theme.spacing(16),
  },
  sectionContent: {
    textAlign: 'left',
    lineHeight: '30px',
    paddingLeft: theme.spacing(16),
    paddingRight: theme.spacing(16),
  },
  sectionLinks: {
    backgroundColor: '#d8c4a569',
  },
  section: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  authorsSection: {},
}));

export const ProjectPage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.section}>
        <Typography variant="h3" className={classes.sectionTitle}>
          Sobre o projeto
        </Typography>
        <p className={classes.sectionContent}>
          Este website apresenta o projeto de conclusão de curso dos alunos Douglas Ramos, Pedro
          Brito e Rafael Seiji, com orientação do professor Glaube, pelo Escola Politécnica da
          univesidade de São Paulo, 2020. O trabalho versa sobre o estudo do uso de modelos de
          processamento de linguagem natural em partidas de xadrez, a fim de detectar pontos de
          viradas (ou melhores momentos) da partida.
        </p>
      </section>

      <section className={`${classes.sectionLinks} ${classes.section}`}>
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
      </section>

      <section className={`${classes.authorsSection}, ${classes.section}`}>
        <Typography variant="h3" className={classes.sectionTitle}>
          Autores
        </Typography>
        <ul className={classes.sectionContent}>
          <li>Douglas Ramos</li>
          <li>Pedro Brito</li>
          <li>Rafael Seiji</li>
          <li>Glauber Rocha</li>
        </ul>
      </section>
    </div>
  );
};
