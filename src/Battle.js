import React, { Component } from 'react';
import PlayerInput from './PlayerInput'
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-around'
  },
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

  render() {
    const playerOneName = this.state.playerOneName
    const playerTwoName = this.state.playerTwoName
    const {classes} = this.props 
    return (
      <div className={classes.container}>
        {!playerOneName && 
        <PlayerInput
          id='playerOne'
          label='Player One'
          onSubmit={this.handleSubmit}
         />}

        {!playerTwoName && 
        <PlayerInput
          id='playerTwo'
          label='Player Two'
          onSubmit={this.handleSubmit}
        />}
      </div>
    );
  }
}

export default withStyles(styles)(Battle);