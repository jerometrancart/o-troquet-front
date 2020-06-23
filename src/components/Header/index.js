import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import Avatar from 'src/assets/images/avatars/001-modern.svg';
import PropTypes from 'prop-types';

import './style.scss';

const Header = ({ username, logout, isLogged }) => (
  <div className="header">
    <Link
      to="/"
    >
      <h1 className="main-title">O'Troquet</h1>
    </Link>
    {/* la nav, le pseudo et l'avatar + les amis */}
    {isLogged
    && (
      <div className="user-id">
        {/* <Image src={Avatar} classname="avatar" alt="avatarJoueur" size="small" avatar /> */}
        <p>Bonjour <span className="userPseudo">{username}</span> ^^</p>
        <Link to="/" onClick={logout} className="logout-link">Logout</Link>
      </div>
    )}

  </div>
);

Header.propTypes = {
  username: PropTypes.string,
  logout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  username: '',
};

export default Header;
