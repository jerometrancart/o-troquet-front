import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Dice = ({ children }) => (
  <div className="board">
    Dice
    {children}
  </div>

);

Dice.propTypes = {
  children: PropTypes.node,
};

Dice.defaultProps = {
  children: (
    <div className="dice">Dice children</div>
  ),
};

export default Dice;
