import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useHistory, useParams } from 'react-router-dom';
// import resources
import Controls from 'src/containers/GameboardPage/Fourtwentyone/controls';
import Die from 'src/containers/GameboardPage/Fourtwentyone/die';
import Chatrooms from 'src/containers/GameboardPage/Fourtwentyone/chatrooms';
import Board from './board';
import Dice from './dice';
import Scoreboard from 'src/containers/GameboardPage/Fourtwentyone/scoreboard';
import Infos from './infos';
import Players from './players';

import './style.scss';

// const GameboardPage = ({ isLogged, rollDice, toggleBlock, webSocketConnect, webSocketDisconnect, webSocketListenRoom, roomId }) => {
const GameboardPage = ({ isLogged, rollDice, toggleBlock, webSocketConnect, webSocketDisconnect, webSocketListenRoom, startGame, room}) => {
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

  const { roomId } = useParams();

  useEffect(() => {
    webSocketConnect();
    // return webSocketDisconnect;
  }, []);

  useEffect(() => {
    webSocketListenRoom();
  }, [roomId]);

  return (
    <div className="gameScreen">
      <h2>room : {roomId}</h2>
      <div className="gameBoard">
        <Board>
          <Dice>
            <Die dieId="firstDie" toggleBlock={toggleBlock} />
            <Die dieId="secondDie" toggleBlock={toggleBlock} />
            <Die dieId="thirdDie" toggleBlock={toggleBlock} />
          </Dice>
        </Board>
      </div>
      <div className="right-panel">
        <Scoreboard
          room={room}
        >
          <Infos />
          <Players />
        </Scoreboard>
        <Controls
          rollDice={rollDice}
          startGame={startGame}
        />
        <Chatrooms />
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
  // roomId: PropTypes.string.isRequired,
  webSocketListenRoom: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  // room: PropTypes.shape({
  //   id: PropTypes.string.isRequired,

  //   users: PropTypes.arrayOf(PropTypes.shape({
  //     name: PropTypes.string.isRequired,
  //     score: PropTypes.number.isRequired,
  //   })).isRequired,

  //   pot: PropTypes.number.isRequired,

  //   started: PropTypes.bool.isRequired,

  //   firstDie: PropTypes.shape({
  //     data: PropTypes.number.isRequired,
  //     blocked: PropTypes.bool.isRequired,
  //   }),

  //   secondDie: PropTypes.shape({
  //     data: PropTypes.number.isRequired,
  //     blocked: PropTypes.bool.isRequired,
  //   }),

  //   thirdDie: PropTypes.shape({
  //     data: PropTypes.number.isRequired,
  //     blocked: PropTypes.bool.isRequired,
  //   }),
  // }).isRequired,

};

GameboardPage.defaultProps = {
  toggleBlock: false,
};

export default GameboardPage;
