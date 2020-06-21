import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Chatrooms = ({ children }) => (
  <div className="chatrooms">
    Chatrooms
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
