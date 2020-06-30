import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Message = ({ author, content, isAuthor }) => {
  return (
    <div className={isAuthor ? 'chatroom-message--isAuthor' : 'chatroom-message'}>
      <div className="chatroom-message-author">{author} :
        <p className="chatroom-message-content">{content}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string,
  isAuthor: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
};

Message.defaultProps = {
  author: 'Anonyme',
};

export default Message;
