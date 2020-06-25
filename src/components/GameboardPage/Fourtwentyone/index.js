import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// import resources
import Controls from 'src/containers/GameboardPage/Fourtwentyone/controls';
import Die from 'src/containers/GameboardPage/Fourtwentyone/die';
import Board from './board';
import Dice from './dice';
import Scoreboard from './scoreboard';
import Infos from './infos';
import Players from './players';
import Chatrooms from 'src/containers/GameboardPage/Fourtwentyone/chatrooms';

import './style.scss';

const GameboardPage = ({ isLogged, rollDice, toggleBlock }) => {
  /*
  if (!isLogged) {
    return <Redirect to="/" />;
  }
  */
  return (
    <div className="gameScreen">
      <h2>--- 421 ---</h2>
      <div className="gameBoard">
        <Board>
          <Dice>
            <Die dieId="first-die" toggleBlock={toggleBlock} />
            <Die dieId="second-die" toggleBlock={toggleBlock} />
            <Die dieId="third-die" toggleBlock={toggleBlock} />
          </Dice>
        </Board>
        <div className="right panel">
          <Scoreboard>
            <Infos />
            <Players />
          </Scoreboard>
          <Controls rollDice={rollDice} />
          <Chatrooms />
        </div>
      </div>
    </div>
  );
};

GameboardPage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  rollDice: PropTypes.func.isRequired,
};

export default GameboardPage;
