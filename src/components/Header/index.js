import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import Avatar from 'src/assets/images/avatars/001-modern.svg';

import './style.scss';

const Header = ({ username }) => (
  <div className="header">
    <Link
      to="/"
    >
      <h1 className="main-title">O'Troquet</h1>
    </Link>
    {/* la nav, le pseudo et l'avatar + les amis */}
    <div className="user-id">
      {/* <Image src={Avatar} classname="avatar" alt="avatarJoueur" size="small" avatar /> */}
      <span>{username}</span>
    </div>
  </div>
);

export default Header;
