import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Avatar } from '@material-ui/core'

const RepoGrid = props => (
  <div
    style={{
      width: '80%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }}
  >
    {props.repos.map((repo, i) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: 150,
          height: 200
        }}
      >
        <div>#{i + 1}</div>
        <Avatar
          alt="Adelle Charles"
          src={repo.owner.avatar_url}
          style={{ height: 100, width: 100 }}
        />

        <div href={repo.html_url}>{repo.name}</div>
        <div>@{repo.owner.login}</div>
        <div>{repo.stargazers_count} stars</div>
      </div>
    ))}
  </div>
)

export default RepoGrid
