import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Profile from './Profile'


const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },

});

const Player = (props) => {
  const { classes } = props;
  return (
    <div>
      <div className={classes.container}>
        <Typography type="display1" gutterBottom>
          {props.label}
        </Typography>
        <Typography type="headline" gutterBottom>
        Score: {props.score}
        </Typography>
      </div>
        <Profile 
          info={props.profile}
        />
      
    </div>

  );
};
export default withStyles(styles)(Player)