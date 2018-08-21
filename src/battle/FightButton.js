import React from 'react'
import { Button, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
const FightButton = ({ userNames, match }) => (
  <div>
    {userNames[0] &&
      userNames[1] && (
        <div style={{ margin: 50 }}>
          <Link
            style={{ textDecoration: 'none' }}
            to={{
              pathname: match.url + '/results',
              state: {
                userNames
              }
            }}
          >
            <Button variant="contained" size="large" color="primary">
              Fight!
            </Button>
          </Link>
        </div>
      )}
  </div>
)

export default FightButton

// playerOneImage &&
//   playerTwoImage &&
