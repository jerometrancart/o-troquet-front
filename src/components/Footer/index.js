import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Footer = ({ loggedAsAdmin }) => (
  <footer>Mentions légales + Qui sommes-nous?

    {loggedAsAdmin && (
      <Button color="blue" className="center aligned">Administration
      </Button>
    )}

  </footer>
);

Footer.propTypes = {
  loggedAsAdmin: PropTypes.bool,
};
Footer.defaultProps = {
  loggedAsAdmin: true,
};

export default Footer;
