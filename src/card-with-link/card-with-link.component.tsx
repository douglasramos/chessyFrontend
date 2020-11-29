import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

const useQuoteStyles = makeStyles(
  (theme) => ({
    card: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      borderRadius: 8,
    },
    cardAction: {
      height: '80px',
    },
    avatar: {
      width: 48,
      height: 48,
    },
    twitter: {
      marginLeft: 'auto',
      color: theme.palette.primary.light,
    },
    name: {
      fontSize: 20,
    },
    quote: {
      paddingBottom: '16px !important',
      paddingTop: 0,
      '& em': {
        fontStyle: 'normal',
        color: theme.palette.primary.main,
      },
    },
  }),
  { name: 'HomeQuote' },
);

export interface Props {
  href: string;
  title: string;
  image: string;
}
export const CardWithLink = (props: Props): JSX.Element => {
  const { image, href, title } = props;
  const classes = useQuoteStyles();

  return (
    <Card variant="outlined" className={classes.card}>
      <CardActionArea target="_blank" href={href} className={classes.cardAction}>
        <CardContent>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Avatar src={`/icons/${image}.svg`} alt={title} className={classes.avatar} />
            </Grid>
            <Grid item>
              <Typography component="div" variant="h4" className={classes.name}>
                {title}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
