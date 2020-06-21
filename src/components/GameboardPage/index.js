import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// import resources
import Board from './board';
import Dice from './dice';
import Die from './die';
import Scoreboard from './scoreboard';
import Controls from './controls';
import Chatrooms from './chatrooms';

import './style.scss';

const GameboardPage = ({ isLogged }) => {
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
            <Die />
            <Die />
            <Die />
          </Dice>
        </Board>
        <div className="right panel">
          <Scoreboard />
          <Controls />
          <Chatrooms />
        </div>
      </div>
    </div>
  );
};

GameboardPage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default GameboardPage;
