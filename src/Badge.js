

import React from 'react';
import PropTypes from 'prop-types';

const Badge = props => {
  return (
    <div>
      <img
        src={props.img}
        alt='Avatar'
        style={{width: 500, height: 500}}
      />
      <h1>Name: {props.name}</h1>
      <h3>User Name: {props.username}</h3>

    </div>
  );
};

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Badge;