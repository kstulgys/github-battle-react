import React, { Component } from 'react'
import { sortAllPlayers } from '../utils/api'
import { Link } from 'react-router-dom'
import PlayerPreview from './PlayerPreview'
import Player from './Player'
import Loader from '../common/Loader'
import ResultsError from './ResultsError'
import { Button, Toolbar, Typography } from '@material-ui/core'
import R from 'ramda'

class Results extends Component {
  state = {
    error: null,
    loading: true
  }

  componentDidMount() {
    let { userNames } = this.props.location.state
    sortAllPlayers(userNames).then(results => {
      results == null
        ? this.setState({
            error:
              'Looks like there was an error. Make sure that both users are on Github.',
            loading: false
          })
        : this.setState({
            error: null,
            loading: false,
            results: results
          })
    })
  }
  render() {
    const { error, loading, results } = this.state
    console.log(results)
    if (loading === true) {
      return <Loader />
    }
    if (error) {
      return <ResultsError error={error} />
    }

    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: '20vh'
          }}
        >
          {R.map(({ score, profile }) => (
            <Player score={score} profile={profile} />
          ))(results)}
        </div>
        <div style={{ textAlign: 'center', padding: 30 }}>
          <Button onClick={() => this.props.history.push('/battle')}>
            Reset
          </Button>
        </div>
      </div>

      // <Player label="Loser" score={loser.score} profile={loser.profile} />
    )
  }
}

export default Results
// {R.map({score, profile} => (
// 	<Player
// 		label="Winner"
// 		score={score}
// 		profile={profile}
// 	/>
// ))(this.state.results)}
