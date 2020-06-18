import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Scoreboard = ({ children }) => (
  <div className="board">
    Scoreboard
    {children}
  </div>

);

Scoreboard.propTypes = {
  children: PropTypes.node,
};

Scoreboard.defaultProps = {
  children: (
    <div className="dice">Scoreboard children</div>
  ),
};

export default Scoreboard;
