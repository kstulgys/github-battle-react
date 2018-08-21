import React from 'react'
import PropTypes from 'prop-types'
import { Button, Avatar, Typography } from '@material-ui/core'

const ResetButton = props => {
  // const { pathname } = props.location

  return (
    <div>
      <Button color="primary" onClick={() => props.onHandleReset(props.id)}>
        Reset
      </Button>
    </div>
  )
}

export default ResetButton
