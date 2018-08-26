import React from 'react'
import PropTypes from 'prop-types'
import { Button, Avatar, Typography } from '@material-ui/core'

const PlayerPreview = props => {
  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 300,
          width: 300
          // border: "1px solid green"
        }}
      >
        <Avatar
          alt="Adelle Charles"
          src={props.avatar}
          style={{ height: 200, width: 200 }}
        />
        <Typography variant="headline">{props.username}</Typography>

        <Button color="primary" onClick={() => props.onHandleReset(props.id)}>
          Reset
        </Button>
      </div>
    </div>
  )
}

export default PlayerPreview
