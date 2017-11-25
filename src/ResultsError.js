import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
  errorMessage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 100,
    height: 200, 
  },
  button: {
    textDecoration: 'none',
    color: 'white',
    
  }
});

const componentName = (props) => {
  const { classes } = props;
  return (
    <div className={classes.errorMessage}>
      <Typography type="title" gutterBottom>
      {props.error}
      </Typography>
      <Button raised color="primary" >
        <Link to="/battle" className={classes.button}>Reset</Link>
      </Button>
      
    </div>
  );
};

export default withStyles(styles)(componentName);