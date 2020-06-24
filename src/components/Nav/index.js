import React from 'react';
// import Friendlist from 'src/components/Friendlist';
import './style.scss';

const Nav = () => (
  <nav className="menu">
    <a className="menu-link menu-link--current">Accueil</a>
    <a className="menu-link menu-link--current">Préférences</a>
    <a className="menu-link menu-link--current">Statistiques / Récompenses</a>
    <a className="menu-link menu-link--current">Me déconnecter</a>
    <a className="menu-link menu-link--current">Amis</a>
 {/* <Friendlist friendList={friendList}/> */}
  </nav>
);

export default Nav;
