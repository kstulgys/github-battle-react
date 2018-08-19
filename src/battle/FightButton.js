import React from 'react'
import { Button, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
const FightButton = ({
  playerOneImage,
  playerTwoImage,
  playerOneName,
  playerTwoName,
  match
}) => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: 50 }}>
    {playerOneImage &&
      playerTwoImage && (
        <Link
          style={{ textDecoration: 'none' }}
          to={{
            pathname: match.url + '/results',
            state: {
              playerOneName: playerOneName,
              playerTwoName: playerTwoName
            }
          }}
        >
          <Button variant="contained" size="large" color="primary">
            Fight!
          </Button>
        </Link>
      )}
  </div>
)

export default FightButton

// playerOneImage &&
//   playerTwoImage &&
