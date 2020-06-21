import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Players = ({ children }) => (
  <div className="players">
    Players
    {children}
  </div>
);

Players.propTypes = {
  children: PropTypes.node,
};

Players.defaultProps = {
  children: (
    <div className="players--children">Players children</div>
  ),
};

export default Players;
