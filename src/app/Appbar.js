import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import { NavLink } from 'react-router-dom'

const navLink = {
  color: '#ffffff',
  textDecoration: 'none'
}

const ButtonAppBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar
          style={{
            display: 'flex',
            width: 300,
            justifyContent: 'space-around'
          }}
        >
          <Typography variant="title" type="title" color="inherit">
            <NavLink exact to="/" style={navLink}>
              Home
            </NavLink>
          </Typography>
          <Typography variant="title" color="inherit">
            <NavLink to="/battle" style={navLink}>
              Battle
            </NavLink>
          </Typography>
          <Typography variant="title" color="inherit">
            <NavLink to="/popular" style={navLink}>
              Popular
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default ButtonAppBar
