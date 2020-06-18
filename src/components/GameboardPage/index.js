import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// import resources
import Board from './board';
import Dice from './dice';
import Scoreboard from './scoreboard';
import Chatrooms from './chatrooms';

import './style.scss';

const GameboardPage = ({ isLogged }) => {
  if (!isLogged) {
    return <Redirect to="/" />;
  }
  return (
    <div className="gameBoard">
      Gameboard
      <Board>
        <Dice />
      </Board>
      <Scoreboard />
      <Chatrooms />
    </div>
  );
};

GameboardPage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default GameboardPage;
