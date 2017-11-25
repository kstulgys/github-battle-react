import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { NavLink } from 'react-router-dom'



const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  ulStyles: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  liItem: {
    marginLeft: 20,
  },
  active: {
    fontWeight: 'bold',
    fontSize: 25,
    
  },

});

const navLink = {
    color: '#ffffff',
    textDecoration: 'none',
};


function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            <ul className={classes.ulStyles}>
              <li className={classes.liItem}><NavLink  exact activeClassName={classes.active} to='/' style={navLink}>Home</NavLink></li>
              <li className={classes.liItem}><NavLink activeClassName={classes.active} to='/battle' style={navLink}>Battle</NavLink></li>
              <li className={classes.liItem}><NavLink activeClassName={classes.active} to='/popular' style={navLink}>Popular</NavLink> </li>
            </ul>
          </Typography>       
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

{/* <div>
<NavLink exact activeClassName={classes.active} to='/'>Home</NavLink>
</div>
<div>
<NavLink activeClassName={classes.active} to='/battle'>Battle</NavLink>
</div>
<div>
<NavLink activeClassName={classes.active} to='/popular'>Popular</NavLink>          
</div> */}