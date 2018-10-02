import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
} from '@material-ui/core';
import { KeyboardBackspace } from '@material-ui/icons';

const styles = theme => ({
  card: {
    maxWidth: 345,
    marginBottom: 20,
  },
  cardArea: {
    width: '100%',
  },
  media: {
    height: 300,
  },
  title: {
    marginBottom: 10,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 20,
  },
});

export class Sandboxroute extends Component {
  render() {
    const {
      name, image, status, created,
    } = this.props.location.state;
    const { classes } = this.props;
    return (
      <Fragment>
        <Card className={classes.card}>
          <CardActionArea className={classes.cardArea}>
            <CardMedia className={classes.media} image={image} title={name} />
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                {`Created: ${created}`}
              </Typography>
              <Typography gutterBottom variant="headline" component="h2">
                {name}
              </Typography>
              <Typography component="p">{`Status: ${status}`}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Button size="small" component={Link} to="/">
          <KeyboardBackspace className={classes.leftIcon} />
          Go back
        </Button>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Sandboxroute);
