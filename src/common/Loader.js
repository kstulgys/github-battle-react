import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Loader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text
    }
  }
  componentDidMount() {
    const stopper = this.props.text + '...'
    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState(function() {
          return {
            text: this.props.text
          }
        })
      } else {
        this.setState(function(prevState) {
          return {
            text: prevState.text + '.'
          }
        })
      }
    }, this.props.speed)
  }

  componentWillUnmount() {
    console.log('cleared interval')
    window.clearInterval(this.interval)
  }

  render() {
    return <p>{this.state.text}</p>
  }
}

Loader.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loader.defaultProps = {
  text: 'Loading',
  speed: 300
}

export default Loader
