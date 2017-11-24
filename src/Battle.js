import React, { Component } from 'react';
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';



const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 100,
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
    
  },
  buttonLink: {
    textDecoration: 'none',
    color: 'white',
    padding: '30px 60px 30px 60px',
    fontSize: 20,
  }
})

class Battle extends Component {
  constructor(props) {
    super();
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    }
  }

  handleSubmit = (id, username) => {
    this.setState(function () {
      let newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = `https://github.com/${username}.png?size=200`;
      return newState
    })
  }

  handleReset = (id) => {
    this.setState(function () {
      let newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState
    })
  }

  render() {
    const match = this.props.match
    const playerOneName = this.state.playerOneName
    const playerTwoName = this.state.playerTwoName
    const playerOneImage = this.state.playerOneImage
    const playerTwoImage = this.state.playerTwoImage

    const {classes} = this.props 
    return (
      <div>
      <div className={classes.container}>
        {!playerOneName && 
        <PlayerInput
          id='playerOne'
          label='Player One'
          onSubmit={this.handleSubmit}
         />}

         {playerOneImage !== null &&
          <PlayerPreview
            avatar={playerOneImage}
            username={playerOneName}
            id='playerOne'
            onReset={this.handleReset}
           />}

        {!playerTwoName && 
        <PlayerInput
          id='playerTwo'
          label='Player Two'
          onSubmit={this.handleSubmit}
        />}

        {playerTwoImage !== null &&
          <PlayerPreview
            avatar={playerTwoImage}
            username={playerTwoName}
            id='playerTwo'
            onReset={this.handleReset}
           />}
      </div>
          <div className={classes.button}>
            {playerOneImage && playerTwoImage &&
              <Button raised color="primary" >
                <Link className={classes.buttonLink}
                  to={{
                    pathname: match.url + 'results',
                    state: { playerOneName: playerOneName, playerTwoName: playerTwoName }
                  }}> Fight!
                </Link>
              </Button>
            }
          </div>
      </div>

      
    );
  }
}

export default withStyles(styles)(Battle);