import {
  Card,
  Checkbox,
  CheckboxProps,
  Container,
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
import { FixedSizeList, ListChildComponentProps } from 'react-window';

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
  }),
);

export const ApplicationPage = (): JSX.Element => {
  const [, forceUpdate] = useReducer((x: number) => x + 1, 0);
  const classes = useStyles();

  const matches = matchSamples;

  const [isOnlyBestMomentsCheck, setIsOnlyBestMomentsCheck] = useState(false);
  const [currentPosListIndex, setCurrentPosListIndex] = useState(0);
  const [currentMatchListIndex, setCurrentMatchListIndex] = useState(0);

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
          <Grid container item className={classes.cardChessBoardTop} alignItems="center">
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
    </>
  );
};
