import React from 'react';
import PropTypes from 'prop-types';

import Infos from './infos.js';
import Players from './players';

import './style.scss';

const Scoreboard = ({ children, players, pot }) => (
  <div className="scoreboard">
    <h2 className="scoreboard--title">Score :</h2>
    {players.map((player) => (
      <p key={player.name}> {player.name} - {player.score}</p>
    ))}
  </div>

);

Scoreboard.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Scoreboard.defaultProps = {
//  children: (
//    <div className="scoreboard--children">Scoreboard children</div>
//  ),
};

export default Scoreboard;
