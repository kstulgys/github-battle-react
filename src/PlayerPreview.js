
// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
    margin: 50,
  },
  media: {
    height: 300,
  },
};

function PlayerPreview(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.avatar}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {props.username}
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary" onClick={props.onReset.bind(null, props.id)}>
            Reset
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

PlayerPreview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayerPreview);