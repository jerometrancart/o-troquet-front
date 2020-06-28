import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons';

const Friend = ({ isAccepted, isAnswered, friendDetails }) => {
  if (isAccepted && isAnswered) {
    return (
      <li className="friendList--item"><span className="friendList--item--name">{friendDetails.username}</span>
        <FontAwesomeIcon className="friendList--icon" icon={faComment} />
        <FontAwesomeIcon className="friendList--icon" icon={faTimes} />
      </li>
    );
  }
  else return null
};

Friend.propTypes = {
  isAccepted: PropTypes.bool.isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

export default Friend;
