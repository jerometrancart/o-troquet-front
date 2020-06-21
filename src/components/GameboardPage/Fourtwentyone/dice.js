import React, { useEffect }from 'react';
import PropTypes from 'prop-types';
import './dice.scss';

const Dice = ({ children }) => (
  <div className="dice">
    {children}
  </div>
);

Dice.propTypes = {
  children: PropTypes.node,
};

Dice.defaultProps = {
  children: (
    <div className="dice--children">Dice children</div>
  ),
};

export default Dice;
