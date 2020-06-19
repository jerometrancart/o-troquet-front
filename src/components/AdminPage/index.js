import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Forbidden from 'src/components/Forbidden';

import './style.scss';

const AdminPage = ({ isAdmin, isLogged }) => {
  if (!isLogged) {
    return <Redirect to="/" />;
  }
  if (!isAdmin) {
    return <Forbidden />;
  }
  return (
    <div className="adminPage">
      Welcome to admin administration page
      You shouldn't see this unless you're logged in as administrator ^^
    </div>
  );
};

AdminPage.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};
/*
AdminPage.defaultProps = {
  isAdmin: false,
};
*/
export default AdminPage;
