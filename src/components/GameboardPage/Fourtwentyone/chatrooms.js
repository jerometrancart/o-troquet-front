import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Messages from 'src/containers/GameboardPage/Fourtwentyone/Messages';
import Form from 'src/containers/GameboardPage/Fourtwentyone/Form';


// import './style.scss';
import './chatrooms.scss';

const Chatrooms = ({
  webSocketConnect,
}) => (
    <div className="chatroom">
      <Messages className="chatroom-messages" />
      <Form className="chatroom-input" />
    </div>
);

Chatrooms.propTypes = {
  webSocketConnect: PropTypes.func.isRequired,
};

Chatrooms.defaultProps = {

};

export default Chatrooms;
