import React, { Component } from 'react'
import api from '../utils/api'
import { Link } from 'react-router-dom'
import PlayerPreview from './PlayerPreview'
import Player from './Player'
import Loader from '../common/Loader'
import ResultsError from './ResultsError'

class Results extends Component {
  state = {
    winner: null,
    loser: null,
    error: null,
    loading: true
  }

  componentDidMount() {
    let players = this.props.location.state
    api.battle([players.playerOneName, players.playerTwoName]).then(results => {
      results == null
        ? this.setState({
            error:
              'Looks like there was an error. Make sure that both users are on Github.',
            loading: false
          })
        : this.setState({
            error: null,
            winner: results[0],
            loser: results[1],
            loading: false
          })
    })
  }
  render() {
    const { winner, loser, error, loading } = this.state

    if (loading === true) {
      return <Loader />
    }
    if (error) {
      return <ResultsError error={error} />
    }

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '20vh'
        }}
      >
        <Player label="Winner" score={winner.score} profile={winner.profile} />
        <Player label="Loser" score={loser.score} profile={loser.profile} />
      </div>
    )
  }
}

export default Results
