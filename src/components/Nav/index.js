import React from 'react';
import Friendlist from 'src/containers/Friendlist';
import './style.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = ( { menuItems, username, isLogged, /* check */ } ) => (
  <nav className="menu">
    <NavLink
      to="/gameselect"
      exact
      className="menu-link"
      activeclassname="menu-link--current"
    >Accueil
    </NavLink>
    {/* Je recupère le tableau menuItems depuis le reducer user
    Ci-dessous, je le map pour recupéré un item, je
    destructure cet item pour récupérer son id et son title
    je m'en sers pour générer autant de <a> que d'items dans
    le tableau
    */}
    {menuItems.map(({ id, title, url }) => (
      <NavLink
        to={url}
        key={id}
        className="menu-link"
        activeclassname="menu-link--current"
      >{title}
      </NavLink>
    ))} 
    {/* <a className="menu-link menu-link--current">Profil</a>
        <a className="menu-link menu-link--current">Statistiques / Récompenses</a>
        <a className="menu-link menu-link--current">Amis</a>
        <a className="menu-link menu-link--current">Retour au bar</a> */}
    <Friendlist /* friendList={friendList} *//>
  </nav>
);

Nav.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  username: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Nav;
