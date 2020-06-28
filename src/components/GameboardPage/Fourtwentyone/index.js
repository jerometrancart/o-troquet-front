import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useHistory } from 'react-router-dom';
// import resources
import Controls from 'src/containers/GameboardPage/Fourtwentyone/controls';
import Die from 'src/containers/GameboardPage/Fourtwentyone/die';
import Chatrooms from 'src/containers/GameboardPage/Fourtwentyone/chatrooms';
import Board from './board';
import Dice from './dice';
import Scoreboard from './scoreboard';
import Infos from './infos';
import Players from './players';

import './style.scss';

const GameboardPage = ({ isLogged, rollDice, toggleBlock, webSocketConnect, webSocketDisconnect, roomId }) => {
  /*
  if (!isLogged) {
    return <Redirect to="/" />;
  }
  */
  // const history = useHistory();

  // useEffect(() => {

  //   if (roomId) {
  //     history.push(`/gameboard/fourtwentyone/${roomId}`);
  //   }

  // }, []);

  useEffect(() => {
    webSocketConnect();
    return webSocketDisconnect;
  }, []);

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
  toggleBlock: PropTypes.bool,
  webSocketConnect: PropTypes.func.isRequired,
  webSocketDisconnect: PropTypes.func.isRequired,
  roomId: PropTypes.string.isRequired,
};

GameboardPage.defaultProps = {
  toggleBlock: false,
};

export default GameboardPage;
