import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    padding: '20px 60px 20px 60px',
    margin: 40,
    fontSize: 20,
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#ffffff',
  },


});




const Home = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography type="display1" gutterBottom align="center">
        Github Battle: Battle your friends... and stuff.
      </Typography>
      <Button raised color="primary" align="center" className={classes.button}>
        <Link className={classes.linkStyle} to='/battle'>Fight!</Link>
      </Button>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);