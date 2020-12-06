import {
  Card,
  Checkbox,
  CheckboxProps,
  Container,
  FormControlLabel,
  Typography,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Chessboard from 'chessboardjsx';
import React, { useReducer, useState } from 'react';
// import Chessboard from 'react-chessboardjs';
import { isMobile } from 'react-device-detect';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import { samplePgn } from './chessboard-with-list/sample-pgn';

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
  }),
);

export const ApplicationPage = (): JSX.Element => {
  const [, forceUpdate] = useReducer((x: number) => x + 1, 0);
  const classes = useStyles();

  const allPositions = samplePgn;

  const [isOnlyBestMomentsCheck, setIsOnlyBestMomentsCheck] = useState(false);
  const [currentListIndex, setCurrentListIndex] = useState(0);

  const positions = isOnlyBestMomentsCheck
    ? allPositions.filter((pos) => pos.isBestMoment)
    : allPositions;

  function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;

    return (
      <ListItem
        button
        style={style}
        key={index}
        onClick={() => {
          setCurrentListIndex(index);
          forceUpdate();
        }}
        selected={index === currentListIndex}
        className={positions[index].isBestMoment && classes.bestMoment}
      >
        <ListItemText
          className={classes.listText}
          primary={
            <pre>
              {`${`0${positions[index].id + 1}`.slice(-2)} -`} {positions[index].moveFrom} →{' '}
              {`${positions[index].moveTo} `}
              {positions[index].isBestMoment && '✅'}
            </pre>
          }
        />
      </ListItem>
    );
  }

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
      <Container>
        <Typography variant="h4">
          Partida Exemplo - Evento Southern Chess Summer Invitational 2006
        </Typography>
      </Container>
      <Container className={classes.root}>
        <Card variant="outlined" className={classes.cardChessBoard}>
          <div className={classes.cardChessBoardTop}>
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
          </div>
          <div className={classes.cardChessBoardBottom}>
            <FixedSizeList height={600} width={200} itemSize={46} itemCount={positions.length}>
              {renderRow}
            </FixedSizeList>

            <Chessboard position={positions[currentListIndex].fen} width={600} draggable={false} />
          </div>
          <div className={classes.comment}>
            <Typography>{`Comentário: ${positions[currentListIndex].comment}`}</Typography>
          </div>
        </Card>
      </Container>
    </>
  );
};
