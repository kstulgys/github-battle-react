import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const componentName = props => {
  const { classes } = props
  return (
    <div className={classes.errorMessage}>
      <Typography type="title" gutterBottom>
        {props.error}
      </Typography>
      <Button raised color="primary">
        <Link to="/battle" className={classes.button}>
          Reset
        </Link>
      </Button>
    </div>
  )
}

export default componentName
