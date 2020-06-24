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
    <li className="friend">Accueil</li>
    <li className="friend">Préférences</li>
    <li className="friend">Statistiques / Récompenses</li>
    <li className="friend">Me déconnecter</li>
    <li className="friend">Amis</li>
  </ul>
);

Friendlist.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Friendlist;
