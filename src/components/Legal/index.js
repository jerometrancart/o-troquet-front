import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Legal = () => (
  <div className="legal">
    Legal stuff
  </div>
);

/*
Legal.propTypes = {
  isAdmin: PropTypes.bool,
};
Legal.defaultProps = {
  isAdmin: false,
};
*/

export default Legal;
