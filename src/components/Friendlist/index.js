import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
//TODO : initialiser friendList comme tableau d'objets vide dans le reducer
const Friendlist = ({ friendList }) => (
  <ul className="friendList">
    {/* Je recupère au dessus friendlist depuis le reducer
    qui est un tableau d'amis reçu en réponse de la
    requête axios à l'api.
    Ci-dessous, je le map pour recupéré un ami, je
    destructure cet ami pour récupérer son id et son username
    je m'en sers pour générer autant de <li> que d'amis
        {friendList.map(({ id, username }) => (
      <li key={id} className="friend">{username}</li>
    ))} */}
    <h3 className="friendList-title">Les copaing</h3>
    <li className="friend">Damien</li>
    <li className="friend">Clément</li>
    <li className="friend">Jérôme</li>
    <li className="friend">Thomas</li>
    <li className="friend">Florian</li>
  </ul>
);

/* Friendlist.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
    }),
  ).isRequired,
}; */

export default Friendlist;
