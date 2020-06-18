import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Forbidden = () => (
  <div className="forbidden">
    403 not your business !
  </div>
);

/*
Forbidden.propTypes = {
  isAdmin: PropTypes.bool,
};
Forbidden.defaultProps = {
  isAdmin: false,
};
*/

export default Forbidden;
