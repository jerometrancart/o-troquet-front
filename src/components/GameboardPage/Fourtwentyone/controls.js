import React from 'react';
import PropTypes from 'prop-types';
import Rules from './Rules';
import Combos from './Combos';
import Modali, { useModali } from 'modali';

import './style.scss';

const Controls = ({ children, rollDice, nextPlayer, startGame, started }) => {

  const [RulesModal, toggleRulesModal] = useModali({
    animated: true,
    centered: true,
  });

  const [CombosModal, toggleCombosModal] = useModali({
    animated: true,
    centered: true,
  });

  return (

    <div className="buttonbar">
      <div className="buttonbar--line">
        {!started && (<button className="start-button controls--button" type="button" id="start-button" onClick={startGame}>Start Game</button>)}
        {started && (<button className="start-button--started controls--button" type="button" id="start-button" onClick={startGame}>Game started</button>)}

        <button className="roll-button controls--button" type="button" id="roll-button" onClick={rollDice}>Roll Dice</button>
        <button className="next-player-button controls--button" type="button" id="next-player-button" onClick={nextPlayer}>Next player</button>
      </div>
      <div className="buttonbar--line">

        <button
          className="rules controls--button"
          type="button"
          id="rules"
          onClick={toggleRulesModal}
        >
          Règles
        </button>

        <button
          className="combos controls--button"
          type="button"
          id="combos"
          onClick={toggleCombosModal}
        >
          Combinaisons
        </button>

        <Modali.Modal className="stats" {...CombosModal}>
          <Combos />
        </Modali.Modal>
        <Modali.Modal className="stats" {...RulesModal}>
          <Rules />
        </Modali.Modal>

      </div>
    </div>
  );
};

Controls.propTypes = {
  children: PropTypes.node,
  rollDice: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  started: PropTypes.bool.isRequired,
};

Controls.defaultProps = {
  children: (
    <div className="controls--children">Controls children</div>
  ),
};

export default Controls;
