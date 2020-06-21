import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Infos = ({ children }) => (
  <div className="infos">
    Infos
    {children}
  </div>
);

Infos.propTypes = {
  children: PropTypes.node,
};

Infos.defaultProps = {
  children: (
    <div className="infos--children">Infos children</div>
  ),
};

export default Infos;
