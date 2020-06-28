import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Friend = ({ isAccepted, isAnswered, friendDetails }) => {
  if (isAccepted && isAnswered) {
    return (<li className="friendList--item">{friendDetails.username}</li>);
  }
  else return null
};

Friend.propTypes = {
  isAccepted: PropTypes.bool.isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

export default Friend;
