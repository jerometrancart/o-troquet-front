import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Board = ({ children }) => (
  <div className="board">
    {children}
  </div>

);

Board.propTypes = {
  children: PropTypes.node,
};

Board.defaultProps = {
  children: (
    <div className="dice">Board children</div>
  ),
};

export default Board;
