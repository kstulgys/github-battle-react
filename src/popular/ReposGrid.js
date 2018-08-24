import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Avatar } from '@material-ui/core'
import R from 'ramda'
const log = R.tap(console.log)

const Repo = ({
  owner: { login, avatar_url },
  name,
  html_url,
  stargazers_count
}) => {
  // console.log("got here", name)
  return (
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
      <Avatar
        alt="Adelle Charles"
        src={avatar_url}
        style={{ height: 100, width: 100 }}
      />
      <div href={html_url}>{name}</div>
      <div>@{login}</div>
      <div>{stargazers_count} stars</div>
    </div>
  )
}

const ReposWraper = children => (
  <div
    style={{
      width: '80%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }}
  >
    {children}
  </div>
)

const ReposGrid = R.pipe(
  // R.tap(console.log),
  R.prop('repos'),
  R.map(Repo),
  ReposWraper
)

export default ReposGrid
