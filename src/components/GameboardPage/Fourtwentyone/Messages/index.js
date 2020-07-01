import React, { useEffect, useRef } from 'react';
import Message from 'src/containers/GameboardPage/Fourtwentyone/Message';
import PropTypes from 'prop-types';
import './style.scss';

const Messages = ({ messages }) => {

  const containerElement = useRef(null);

  useEffect(() => {
    // console.log('je veux scroller jusqu\'au dernier message');
    const scrollY = containerElement.current.scrollHeight;
    // console.log('ScrollHeight élement ciblé', scrollY);
    containerElement.current.scrollTo(0, scrollY);
  }, [messages]);

  return (
    <div
      ref={containerElement}
      className="chatroom-messages"
    >
      {/* console.log('je veux transposer mes messages vers un tableau jsx', messages) */}
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
};

// on veut récupèrer une liste de messages = un tableau d'objets représentant les messages

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Messages;
