import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Chatrooms = ({ children }) => (
  <div className="board">
    Chatrooms
    {children}
  </div>

);

Chatrooms.propTypes = {
  children: PropTypes.node,
};

Chatrooms.defaultProps = {
  children: (
    <div className="dice">Chatrooms children</div>
  ),
};

export default Chatrooms;
