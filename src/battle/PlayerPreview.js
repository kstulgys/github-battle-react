import React from 'react'
import PropTypes from 'prop-types'
import { Button, Avatar, Typography } from '@material-ui/core'

const styles = {
  card: {
    margin: 10
  },
  media: {
    height: 300,
    width: 300
  }
}

const PlayerPreview = props => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Avatar
        alt="Adelle Charles"
        src={props.avatar}
        style={{ height: 200, width: 200 }}
      />
      <Typography variant="headline">{props.username}</Typography>
      <Button color="primary" onClick={() => props.onHandleReset(props.player)}>
        Reset
      </Button>
    </div>
  )
}

export default PlayerPreview
