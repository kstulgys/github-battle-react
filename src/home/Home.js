import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Home = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20vh',
        textAlign: 'center'
      }}
    >
      <Typography variant="display1">
        Github Battle: Battle your friends... and stuff.
      </Typography>
      <Link to="/battle" style={{ textDecoration: 'none', margin: 50 }}>
        <Button variant="contained" size="large" color="primary">
          Fight!
        </Button>
      </Link>
    </div>
  )
}

export default Home
