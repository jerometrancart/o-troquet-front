import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Friendlist = ({ friends, curUsername, isLogged,}) => {
  console.log(friends);
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
        // ({ if(({friend.isAccepted}) && ({friend.isAnswered})) &&
        // friends.isAccepted && friends.isAnswered ? 

        <li key={friend.friendDetails.id} className="friendList--item">{friend.friendDetails.username}</li> 
      ))}

    </ul>
  );
};

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  // friendDetails: PropTypes.object.isRequired,
  curUsername: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Friendlist;
