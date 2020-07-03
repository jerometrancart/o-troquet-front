import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Infos from './infos.js';
import Players from './players';

import './style.scss';

const Scoreboard = ({ children, room, players, loading }) => {
  useEffect(() => {

  });
  // const players = room.users;
  return (
    <div className="scoreboard">
      <h2 className="scoreboard--title">Score :</h2>

      {!loading
      && (
        <>
          <div className="scores">
            { players.map((player) => (
              <p key={player.id}> {player.name} - {player.score}</p>
            ))}
          </div>
        </>
      )}
      {/* /*<>
        <p key={room.users[0].name}> {room.users[0].name} - {room.users[0].score}</p>
        <p key={room.users[1].name}> {room.users[1].name} - {room.users[1].score}</p>
        <p key={room.users[2].name}> {room.users[2].name} - {room.users[2].score}</p>
        <p key={room.users[3].name}> {room.users[3].name} - {room.users[3].score}</p>
      </>
        {room.users.forEach((user) => (<p key={user.name}> {user.name} - {user.score}</p>))}
      */}
      {loading
      && (<p>Wait ...</p>)}
    </div>
);
};

Scoreboard.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.string,

    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })),

    pot: PropTypes.number.isRequired,

    started: PropTypes.bool.isRequired,

    firstDie: PropTypes.shape({
      data: PropTypes.number.isRequired,
      blocked: PropTypes.bool.isRequired,
    }),

    secondDie: PropTypes.shape({
      data: PropTypes.number.isRequired,
      blocked: PropTypes.bool.isRequired,
    }),

    thirdDie: PropTypes.shape({
      data: PropTypes.number.isRequired,
      blocked: PropTypes.bool.isRequired,
    }),
  }).isRequired,
  players: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

Scoreboard.defaultProps = { 
  users: [],
};
export default Scoreboard;
/*
{/* console.log('je veux transposer mes messages vers un tableau jsx', messages) */
/*
{messages.map((message) => (
  <Message key={message.id} {...message} />
))}
*/
