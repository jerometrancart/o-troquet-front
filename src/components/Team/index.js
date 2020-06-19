import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Team = () => (
  <div className="theTeam">
    Belingheri - Radulesco - Rouet - Salducci - Trancart
  </div>
);

/*
Team.propTypes = {
  isAdmin: PropTypes.bool,
};
Team.defaultProps = {
  isAdmin: false,
};
*/

export default Team;
