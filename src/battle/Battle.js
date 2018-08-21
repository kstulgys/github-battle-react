import React, { Component } from 'react'
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview'
import { Button, Toolbar, Typography } from '@material-ui/core'
import FightButton from './FightButton'
import ResetButton from './ResetButton'
import R from 'ramda'
import { Link } from 'react-router-dom'
import uid from 'uid'
const log = R.tap(console.log)

class Battle extends Component {
  state = {
    players: [
      { id: 'abcde', submitted: false },
      { id: 'fghiy', submitted: false }
    ]
  }

  handleSubmit = (id, username) => {
    const index = R.findIndex(R.propEq('id', id))(this.state.players)
    let players = [...this.state.players]
    players[index] = {
      ...players[index],
      username,
      submitted: true,
      image: `https://github.com/${username}.png?size=200`,
      timestamp: new Date().getTime()
    }
    this.setState({
      players
    })
  }

  handleReset = id => {
    console.log(id)
    const index = R.findIndex(R.propEq('id', id))(this.state.players)
    let players = [...this.state.players]
    players[index] = {
      ...players[index],
      username: '',
      image: null,
      submitted: false
    }
    this.setState({
      players
    })
  }

  handleAddPlayer = () => {
    const newPlayer = { id: uid(), submitted: false }
    this.setState(({ players }) => ({
      players: [...players, newPlayer]
    }))
  }

  render() {
    const { match } = this.props
    const { players } = this.state
    const userNames = R.pipe(
      R.map(x => x.username),
      R.filter(x => x)
    )(players)
    console.log(userNames)
    return (
      <div
        style={{
          height: '100vh',
          paddingTop: '10vh'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap'
          }}
        >
          {R.addIndex(R.map)(
            ({ id, submitted, image, username }, i) =>
              submitted === false ? (
                <PlayerInput
                  id={id}
                  label={`Player ${i + 1}`}
                  onSubmit={this.handleSubmit}
                />
              ) : (
                <PlayerPreview
                  avatar={image}
                  username={username}
                  onHandleReset={this.handleReset}
                  id={id}
                />
              )
          )(players)}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: 20
          }}
        >
          <Button onClick={this.handleAddPlayer}>Add more players</Button>
          <FightButton match={match} userNames={userNames} />
        </div>
      </div>
    )
  }
}

export default Battle

// {R.addIndex(R.map)(
//   ({ key, id, submitted, image, username }, i) =>
//     submitted && (
//       <PlayerPreview
//         avatar={image}
//         username={username}
//         onHandleReset={this.handleReset}
//         id={id}
//       />
//     )
// )(orderedPlayers)}

// <div>
// 				{!playerOneName && (
// <PlayerInput
// 	id="playerOne"
// 	label="Player One"
// 	onSubmit={this.handleSubmit}
// />
// 				)}

// 				{playerOneImage && (
// 					<div>
// 						<PlayerPreview
// 							avatar={playerOneImage}
// 							username={playerOneName}
// 							onHandleReset={this.handleReset}
// 							player="playerOne"
// 						/>
// 					</div>
// 				)}
// 			</div>
// 			<div>
// 				{!playerTwoName && (
// 					<PlayerInput
// 						id="playerTwo"
// 						label="Player Two"
// 						onSubmit={this.handleSubmit}
// 					/>
// 				)}

// 				{playerTwoImage && (
// 					<div>
// 						<PlayerPreview
// 							avatar={playerTwoImage}
// 							username={playerTwoName}
// 							onHandleReset={this.handleReset}
// 							player="playerTwo"
// 						/>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 		<div>
// <FightButton {...this.state} match={match} />
// 		</div>
