import React from 'react';
import { Link } from 'react-router-dom';
// import { Image } from 'semantic-ui-react';
// import Avatar from 'src/assets/images/avatars/001-modern.svg';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

const Header = ({ username, logout, isLogged, }) => (
  <div className="header">
    <Link
      to="/"
    >
      <h1 className="main-title">O'Troquet</h1>
    </Link>
    {/* la nav, le pseudo et l'avatar + les amis + la sidebar
    n'apparaissent que quand tu es loggé */}
    {isLogged
    && (
    <div className="user">
      
      <div className="user--message">
        {/* <Image src={Avatar} classname="avatar" alt="avatarJoueur" size="small" avatar /> */}
        <p className="user--message--hello"> Bonjour, <span className="user--message--pseudo">{username}</span></p>
        <Link to="/" onClick={logout} className="user--message--logout">Logout</Link>
      </div>
      <FontAwesomeIcon className="user--icon" icon={faUserCircle} />
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
