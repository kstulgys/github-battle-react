
// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    margin: 10,
  },
  media: {
    height: 300,
    width: 300,
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
            {props.children}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

PlayerPreview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayerPreview);