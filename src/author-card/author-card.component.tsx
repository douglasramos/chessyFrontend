import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 250,
    borderRadius: 16,
  },
  media: {
    height: 200,
  },
});

export interface Props {
  href: string;
  name: string;
  description: string;
  image: string;
}

export const AuthorCard = (props: Props): JSX.Element => {
  const { image, href, name, description } = props;
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardActionArea target="_blank" href={href}>
        <CardMedia
          className={classes.media}
          image={`/images/authors/${image}.jpg`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
