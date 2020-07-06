import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { authenticationURIAdministration } from 'src/selectors';

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
      className="team-page link"
      to="/theteam"
    >
      Qui sommes-nous?
    </Link>

    {isAdmin && (
      <a
        href={`http://${authenticationURIAdministration}`}
        target="_blank"
        rel="noreferrer"
      >
        <Button
          color="brown"
          className="center aligned"
        >
          Administration
        </Button>
      </a>
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
