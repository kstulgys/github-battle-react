import React, { Component } from 'react';
import api from './utils/api'
import { Link } from 'react-router-dom'
import PlayerPreview from './PlayerPreview'
import { withStyles } from 'material-ui/styles';
import Player from './Player'
import Loader from './Loader'
import ResultsError from './ResultsError'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  errorMessage: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'grey'
  },
};



class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    }
  }
  componentDidMount () {
    let players = this.props.location.state
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function (results) {
      if (results === null) {
        return this.setState(function () {
          return {
            error: 'Looks like there was an error. Make sure that both users are on Github.',
            loading: false,
          }
        });
      }
      this.setState(function () {
        return {
          error: null,
          winner: results[0],
          loser: results[1],
          loading: false,
        }
      })
    }.bind(this))
  }
  render() {
    const { classes } = this.props;
    const error = this.state.error
    const winner = this.state.winner
    const loser = this.state.loser
    const loading = this.state.loading
    
    if (loading === true) {
      return <Loader />
    }
    if (error) {
      return (
        <ResultsError error={error}/>
      )
    }

    return (
      <div className={classes.container}>
        <Player 
          label='Winner'
          score={winner.score}
          profile={winner.profile}
        />
        <Player 
          label='Loser'
          score={loser.score}
          profile={loser.profile}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Results);