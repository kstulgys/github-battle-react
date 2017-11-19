// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


import {
  NavLink
} from 'react-router-dom'

const styles = theme => ({
  root: {
    // marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  active: {
    fontWeight: 'bold',
  },
  topo: {
    marginLeft: 15,
  }
});

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Typography type="title" color="inherit" className={classes.topo}>
            <NavLink exact activeClassName={classes.active} to='/'>Home</NavLink>
            <NavLink activeClassName={classes.active} to='/battle'>Battle</NavLink>
            <NavLink activeClassName={classes.active} to='/popular'>Popular</NavLink> 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);

{/* <div>
<NavLink exact activeClassName={classes.active} to='/'>Home</NavLink>
</div>
<div>
<NavLink activeClassName={classes.active} to='/battle'>Battle</NavLink>
</div>
<div>
<NavLink activeClassName={classes.active} to='/popular'>Popular</NavLink>          
</div> */}