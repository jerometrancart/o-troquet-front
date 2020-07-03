import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Controls = ({ children, rollDice, nextPlayer }) => {
/*
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

  const nextPlayer = (() => {
    console.log('Next player\'s turn');
  });
*/

  return (
    <div className="controls">
      {/* Controls
      {children} */}
      <div className="buttonbar">
        <button className="roll-button controls--button" type="button" id="roll-button" onClick={rollDice}>Roll Dice</button>
        <button className="next-player-button controls--button" type="button" id="next-player-button" onClick={nextPlayer}>Next player</button>
        <button className="rules controls--button" type="button" id="rules">Règles</button>
        <button className="combos controls--button" type="button" id="combos">Combinaisons</button>
      </div>
    </div>
  );
};

Controls.propTypes = {
  children: PropTypes.node,
  rollDice: PropTypes.func.isRequired,
};

Controls.defaultProps = {
  children: (
    <div className="controls--children">Controls children</div>
  ),
};

export default Controls;
