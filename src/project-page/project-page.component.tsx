import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { isMobile } from 'react-device-detect';

import { AuthorCard } from '../author-card/author-card.component';
import { CardWithLink } from '../card-with-link/card-with-link.component';
import { MainSection } from './sections/main-section.component';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& section': {
      paddingTop: '100px',
      paddingBottom: '100px',
      fontSize: '24px',
      lineHeight: '36px',
      backgroundImage: 'linear-gradient(#fff, #edebe9)',
      [theme.breakpoints.down('sm')]: {
        paddingTop: '50px',
      },
    },
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
  },
  linkSection: {
    backgroundColor: ' #edebe9',
  },
  authorsSection: {
    backgroundColor: ' #edebe9',
  },

  technologySection: {
    // alignItems: 'center',
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
    alignItems: 'center',
    display: 'flex',
  },

  imageButton: {
    position: 'absolute',
    right: '-100px',
    width: '200px',
  },
  techImages: {
    width: '500px',
  },
  leftContent: {
    textAlign: 'left',
  },
  gridItemUnsetFlexBasis: {
    flexBasis: 'unset',
  },
  margin: {
    // marginTop: '1em',
    // marginLeft: '1em',
  },
}));

interface Links {
  image: string;
  name: string;
  href: string;
}

export const ProjectPage = (): JSX.Element => {
  const classes = useStyles();

  const links: Links[] = [
    { image: 'graduation', name: 'Monografia', href: 'https://google.com' },
    { image: 'play', name: `${'Apresentação'}`, href: 'https://google.com' },
    { image: 'github', name: 'Modelo NLP', href: 'https://github.com/Rseiji/TCC-2020' },
    { image: 'github', name: 'Backend', href: 'https://github.com/douglasramos/chessyApi' },
    {
      image: 'github',
      name: 'Frontend',
      href: 'https://github.com/douglasramos/chessyFrontend',
    },
  ];

  const authors = [
    {
      image: 'douglas-ramos',
      href: 'https://www.linkedin.com/in/dcramos/',
      name: 'Douglas Ramos',
      description:
        'Engenheiro de Software na Loft e estudante de Engenharia na Escola Politécnica da Universidade de São Paulo',
    },
    {
      image: 'pedro-brito',
      href: 'https://google.com',
      name: 'Pedro Brito',
      description:
        'Estudante de Engenharia de Computação na Escola Politécnica da Universidade de São Paulo',
    },
    {
      image: 'rafael-seiji',
      href: 'https://www.linkedin.com/in/rafael-higa-808a59196/',
      name: 'Rafael Seiji',
      description:
        'Cientista de dados na BigData e estudante de Engenharia na Escola Politécnica da Universidade de São Paulo',
    },
    {
      image: 'glauber-debona',
      href: 'https://www.linkedin.com/in/glauber-de-bona-224a991a1/',
      name: 'Glauber de Bona',
      description:
        'Professor Doutor no departamento de Engenharia de Computação e sistemas digitais da POLI-USP',
    },
  ];

  return (
    <div className={classes.root}>
      <MainSection />
      <section className={classes.aboutSection}>
        <Container>
          <Typography variant="h3" className={classes.sectionTitle}>
            Sobre o projeto
          </Typography>
          <p className={classes.sectionContent}>
            A chessy é resultado do projeto de conclusão de curso dos alunos Douglas Ramos, Pedro
            Brito e Rafael Seiji, com orientação do professor Glauber de Bona, pela Escola
            Politécnica da Universidade de São Paulo, 2020. O trabalho versa sobre o estudo do uso
            de modelos de processamento de linguagem natural em partidas de xadrez, a fim de
            detectar pontos de viradas (ou melhores momentos) de uma partida.
          </p>
        </Container>
      </section>

      <section className={classes.linkSection}>
        <Container>
          <Typography variant="h3" className={classes.sectionTitle}>
            Links Úteis
          </Typography>
          <Grid container justify="space-between" className={classes.margin} spacing={2}>
            {links.map((link) => (
              <Grid key={link.href} item xs={12} md>
                <CardWithLink title={link.name} image={link.image} href={link.href} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <section className={classes.technologySection}>
        <Container>
          <Typography variant="h3" className={classes.sectionTitle}>
            Tecnologias
          </Typography>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={12} md={7} className={classes.leftContent}>
              <Typography variant="h4">Stockfish</Typography>
              <p>
                Stockfish é uma das mais populares engines de xadrez. Ela consegue simular partidas
                e performar melhor do que os Grandes Mestres. Na chessy, ela é utilizada para
                avaliar a qualidade dos lances em uma partida e assim ajudar o nosso modelo a
                destacar os lances mais importantes do jogo.
              </p>
            </Grid>
            {!isMobile && (
              <Grid item md={5} className={classes.gridItemUnsetFlexBasis}>
                <img
                  className={classes.techImages}
                  src="/images/stockfish.png"
                  alt="stockfish engine"
                />
              </Grid>
            )}
          </Grid>
          <Grid container justify="space-between" alignItems="center">
            {!isMobile && (
              <Grid item md={5} className={classes.gridItemUnsetFlexBasis}>
                <img className={classes.techImages} src="/images/bert.png" alt="BERT" />
              </Grid>
            )}

            <Grid item xs={12} md={7} className={classes.leftContent}>
              <Typography variant="h4">BERT</Typography>
              <p>
                <i>Bidirectional Encoder Representations from Transformers</i>, mais conhecido como
                BERT é uma técnica de machine learning voltada para solução de problemas de NLP. A
                chessy utiliza seu amiguinho para interpretar os comentários dos lances e aprender
                da forma mais eficiente os melhores momentos da partida.
              </p>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.authorsSection}>
        <Container>
          <Typography variant="h3" className={classes.sectionTitle}>
            Autores
          </Typography>
          <Grid container justify="space-between" spacing={2} className={classes.margin}>
            {authors.map((author) => (
              <Grid key={author.name} item xs={12} md>
                <AuthorCard {...author} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </div>
  );
};
