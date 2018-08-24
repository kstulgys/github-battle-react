import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Loader extends Component {
  state = {
    text: 'Loading'
  }
  componentDidMount() {
    const stopper = this.state.text + '...'
    setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({ text: 'Loading' })
      } else {
        this.setState(({ text }) => ({ text: text + '.' }))
      }
    }, 300)
  }

  componentWillUnmount() {
    // console.log('cleared interval')
    clearInterval()
  }

  render() {
    return <p>{this.state.text}</p>
  }
}

export default Loader
