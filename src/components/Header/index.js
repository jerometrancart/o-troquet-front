import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <Link
      to="/"
    >
      <h1 className="main-title">O'Troquet</h1>
    </Link>
    {/* la nav, le pseudo et l'avatar + les amis*/}
    <div className="nav">Lorem <img src="" alt="avatarJoueur"/></div>
  </div>
);

export default Header;
