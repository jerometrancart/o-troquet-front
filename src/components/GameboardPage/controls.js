import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Controls = ({ children }) => {
  const toggleClasses = ((die) => {
    die.classList.toggle('odd-roll');
    die.classList.toggle('even-roll');
  });

  const getRandomNumber = ((min, max) => {
    const mini = Math.ceil(min);
    const maxi = Math.floor(max);
    return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
  });

  const rollDice = (() => {
    const dice = [...document.querySelectorAll('.die-list:not(.blocked)')];
    dice.forEach((die) => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
    });
  });

  return (
    <div className="controls">
      Controls
      {children}
      <button type="button" id="roll-button" onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

Controls.propTypes = {
  children: PropTypes.node,
};

Controls.defaultProps = {
  children: (
    <div className="controls--children">Controls children</div>
  ),
};

export default Controls;
