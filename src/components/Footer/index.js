import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Footer = ({ isAdmin }) => (
  <footer className="footer">
    <Link
      className="legal link"
      to="/legal"
    >
      Mentions légales
    </Link>
    <Link
      className="team link"
      to="/theteam"
    >
      Qui sommes-nous?
    </Link>

    {isAdmin && (
      <Link
        to="/admin"
      >
        <Button
          color="blue"
          className="center aligned"
        >
          Administration
        </Button>
      </Link>
    )}

  </footer>
);

Footer.propTypes = {
  isAdmin: PropTypes.bool,
};
Footer.defaultProps = {
  isAdmin: false,
};

export default Footer;
