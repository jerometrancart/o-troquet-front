import React from 'react';
import PropTypes from 'prop-types';

import Infos from './infos.js';
import Players from './players';

import './style.scss';

const Scoreboard = ({ children }) => (
  <div className="scoreboard">
    Scoreboard
    {children}
  </div>

);

Scoreboard.propTypes = {
  children: PropTypes.node,
};

Scoreboard.defaultProps = {
  children: (
    <div className="scoreboard--children">Scoreboard children</div>
  ),
};

export default Scoreboard;
