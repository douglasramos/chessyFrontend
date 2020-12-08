import {
  Button,
  Card,
  Checkbox,
  CheckboxProps,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Chessboard from 'chessboardjsx';
import React, { useReducer, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { PieChart } from 'react-minimal-pie-chart';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import { CtaButton } from '../cta-button/cta-button.component';
import { matchSamples } from './match-samples';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 30,
      paddingBottom: 200,
    },
    cardChessBoard: {
      boxShadow: '0 5px 30px rgba(0,0,0,.2);',
    },
    cardChessBoardBottom: {
      display: 'flex',
    },
    cardChessBoardTop: {
      padding: 16,
      textAlign: 'left',
    },
    bestMoment: {
      color: 'green',
      // background: 'green',
      fontWeight: 'bold',
    },
    listText: {
      fontFamily: 'monospace',
      '& span': {
        fontSize: 20,
      },
    },
    comment: {
      width: 770,
      textAlign: 'left',
      margin: 15,
    },
    matchSelect: {
      width: 250,
    },
    pieChartLabel: {
      textAlign: 'center',
    },
    dialogContent: {
      height: 460,
    },
    greenSquare: {
      width: 20,
      height: 20,
      background: '#20b36fce',
    },
    redSquare: {
      width: 20,
      height: 20,
      background: '#d41a1ace',
    },
    subLegend: {
      width: 'auto',
      display: 'flex',
      alignItems: 'center',
      marginRight: 16,
    },
    legend: {
      marginTop: 16,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    legendLabel: {
      marginLeft: 8,
    },
  }),
);

export const ApplicationPage = (): JSX.Element => {
  const [, forceUpdate] = useReducer((x: number) => x + 1, 0);
  const classes = useStyles();

  const matches = matchSamples;

  const [isOnlyBestMomentsCheck, setIsOnlyBestMomentsCheck] = useState(false);
  const [currentPosListIndex, setCurrentPosListIndex] = useState(0);
  const [currentMatchListIndex, setCurrentMatchListIndex] = useState(0);
  const [openStats, setOpenStats] = React.useState(false);

  const allMatchPositions = matches[currentMatchListIndex].plays;

  const positions = isOnlyBestMomentsCheck
    ? allMatchPositions.filter((pos) => pos.isBestMoment)
    : allMatchPositions;

  function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;

    return (
      <ListItem
        button
        style={style}
        key={index}
        onClick={() => {
          setCurrentPosListIndex(index);
          forceUpdate();
        }}
        selected={index === currentPosListIndex}
        className={positions[index].isBestMoment && classes.bestMoment}
      >
        <ListItemText
          className={classes.listText}
          primary={
            <pre>
              {`${`0${positions[index].id + 1}`.slice(-2)} -`} {positions[index].moveFrom} →{' '}
              {`${positions[index].moveTo} `}
              {positions[index].isBestMoment && '🟢'}
            </pre>
          }
        />
      </ListItem>
    );
  }

  const handleMatchChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrentMatchListIndex(event.target.value as number);
    setCurrentPosListIndex(0);
  };

  const handleDialogClose = () => {
    setOpenStats(false);
  };

  const handleDialogOpen = () => {
    setOpenStats(true);
  };

  if (isMobile) {
    return (
      <div>
        <Typography>
          Está página não está disponível no mobile. Por favor, utilize o desktop
        </Typography>
      </div>
    );
  }

  return (
    <>
      <Container className={classes.root}>
        <Card variant="outlined" className={classes.cardChessBoard}>
          <Grid
            container
            item
            className={classes.cardChessBoardTop}
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={isOnlyBestMomentsCheck}
                    onChange={(_, value) => {
                      setIsOnlyBestMomentsCheck(value);
                    }}
                    name="checkedG"
                  />
                }
                label="Apenas melhores momentos"
              />
            </Grid>
            <Grid item>
              <FormControl variant="outlined" className={classes.matchSelect}>
                <InputLabel id="demo-simple-select-outlined-label">Partidas</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={currentMatchListIndex}
                  onChange={handleMatchChange}
                  label="Partidas"
                >
                  {matches.map((match) => (
                    <MenuItem key={match.id} value={match.id}>
                      {match.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <CtaButton
                showActionArrow={false}
                onClick={handleDialogOpen}
                title="Mostrar estatísticas"
              />
            </Grid>
          </Grid>
          <div className={classes.cardChessBoardBottom}>
            <FixedSizeList height={600} width={220} itemSize={46} itemCount={positions.length}>
              {renderRow}
            </FixedSizeList>

            <Chessboard
              position={positions[currentPosListIndex].fen}
              width={600}
              draggable={false}
            />
          </div>
          <div className={classes.comment}>
            <Typography>{`Comentário: ${positions[currentPosListIndex].comment}`}</Typography>
          </div>
        </Card>
      </Container>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={openStats}
        onClose={handleDialogClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Estatísticas do modelo</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText>
            {`Predições do Modelo da partida ${matches[currentMatchListIndex].name}`}
          </DialogContentText>
          <Grid container alignItems="center" justify="space-between" spacing={4}>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.pieChartLabel}>
                Acurácia
              </Typography>
              <PieChart
                data={[
                  {
                    title: 'Acertos',
                    value: matches[currentMatchListIndex].accuracyPercentage,
                    color: '#20b36fce',
                  },
                  {
                    title: 'Erros',
                    value: 1 - matches[currentMatchListIndex].accuracyPercentage,
                    color: '#d41a1ace',
                  },
                ]}
                totalValue={1}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                animate={true}
                labelPosition={60}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.pieChartLabel}>
                Revocação
              </Typography>
              <PieChart
                data={[
                  {
                    title: 'Acertos',
                    value: matches[currentMatchListIndex].recallPercentage,
                    color: '#20b36fce',
                  },
                  {
                    title: 'Erros',
                    value: 1 - matches[currentMatchListIndex].recallPercentage,
                    color: '#d41a1ace',
                  },
                ]}
                totalValue={1}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                animate={true}
                labelPosition={60}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.pieChartLabel}>
                Precisão
              </Typography>
              <PieChart
                data={[
                  {
                    title: 'Acertos',
                    value: matches[currentMatchListIndex].precisionPercentage,
                    color: '#20b36fce',
                  },
                  {
                    title: 'Erros',
                    value: 1 - matches[currentMatchListIndex].precisionPercentage,
                    color: '#d41a1ace',
                  },
                ]}
                totalValue={1}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                animate={true}
                labelPosition={60}
              />
            </Grid>
          </Grid>
          <div className={classes.legend}>
            <div className={classes.subLegend}>
              <div className={classes.greenSquare} />
              <p className={classes.legendLabel}>Acertos</p>
            </div>
            <div className={classes.subLegend}>
              <div className={classes.redSquare} />
              <p className={classes.legendLabel}>Erros</p>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
