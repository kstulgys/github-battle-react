import React from 'react'
import PropTypes from 'prop-types'
import PlayerPreview from './PlayerPreview'

const Profile = props => {
  const info = props.info
  return (
    <div>
      <PlayerPreview avatar={info.avatar_url} username={info.login}>
        <ul>
          {info.name && <li>{info.name}</li>}
          {info.location && <li>{info.location}</li>}
          {info.company && <li>{info.company}</li>}
          <li>Followers: {info.followers}</li>
          <li>Following: {info.following}</li>
          <li>Public Repos: {info.public_repos}</li>
          {info.blog && (
            <li>
              <a href={info.blog}>{info.blog}</a>
            </li>
          )}
        </ul>
      </PlayerPreview>
    </div>
  )
}
export default Profile
