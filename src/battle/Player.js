import React from 'react'
import PropTypes from 'prop-types'
import Profile from './Profile'
import { Button, Toolbar, Typography } from '@material-ui/core'

const Player = props => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography>{props.label}</Typography>
      <Typography>Score: {props.score}</Typography>
      <Profile info={props.profile} />
    </div>
  )
}
export default Player
