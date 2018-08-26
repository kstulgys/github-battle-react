import React, { Component } from 'react'
import { InputLabel, FormControl, Typography, Input, Button } from '@material-ui/core'

class PlayerInput extends Component {
  state = {
    username: '',
    submitted: false
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ username: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.props.id, this.state.username)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <form onSubmit={this.handleSubmit}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: 300,
              width: 300
              // border: "1px solid red"
            }}
          >
            <Typography variant="title" gutterBottom>
              {this.props.label}
            </Typography>

            <FormControl>
              <InputLabel>gitHub Username</InputLabel>
              <Input
                value={this.state.username}
                type="text"
                onChange={this.handleChange}
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!this.state.username}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default PlayerInput
