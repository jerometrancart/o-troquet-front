import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';

import './style.scss';

const Friendlist = ({ friends, curUsername, isLogged,}) => {
  // console.log(friends);
  return (
    <ul className="friendList">
      {/* Je recupère au dessus friendlist depuis le reducer
      qui est un tableau d'amis reçu en réponse de la
      requête axios à l'api.
      Ci-dessous, je le map pour recupéré un ami, je
      destructure cet ami pour récupérer son id et son username
      je m'en sers pour générer autant de <li> que d'amis
      */}
      <h3 className="friendList-title">Les copaings</h3>
      {friends.map((friend) => (
        <Friend key={friend.friendDetails.id} {...friend} />
      ))}
    </ul>
  );
};

Friendlist.propTypes = {
  friends: PropTypes.array,
  // friendDetails: PropTypes.object.isRequired,
  curUsername: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

Friendlist.defaultProps = {
  friends: [],
};

export default Friendlist;
