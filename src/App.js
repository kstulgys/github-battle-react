import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Popular from './Popular';
import AppBar from './Appbar'
import Home from './Home'
import Battle from './Battle'
import Results from './Results';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom'


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    borderRadius: 50,
    color: theme.palette.text.secondary,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
        <Router>
          <div>
            <AppBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/battle' component={Battle} />
              <Route path='/battle/results' component={Results} />
              <Route path='/popular' component={Popular} />
              <Route render={function () {
                return <p>Not Found :(</p>
              }} />

            </Switch>
          </div>
        </Router>

    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

