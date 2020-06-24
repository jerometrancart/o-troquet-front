import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Input } from 'semantic-ui-react';

import './style.scss';
import './chatrooms.scss';

const Chatrooms = ({
  children,
  value,
  changeValue,
  type,
  placeholder,
  name,
}) => (
  <div className="chatrooms">
    <div className="chatroom-messages" />
    <Input
      className="chatroom-input"
      icon={<Icon name="search" inverted circular link />}
      placeholder="Type your text here ..."
    />
    {children}
  </div>

);

Chatrooms.propTypes = {
  children: PropTypes.node,
};

Chatrooms.defaultProps = {
  children: (
    <div className="chatrooms--children">Chatrooms children</div>
  ),
};

export default Chatrooms;
