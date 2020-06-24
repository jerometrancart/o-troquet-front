import React from 'react';
// import Friendlist from 'src/components/Friendlist';
import './style.scss';
// import de la liste de boutons du menu depuis src/data.js
// import menuItems from 'src/data';
import PropTypes from 'prop-types';

const Nav = (/* { menuItems } */) => (
  <nav className="menu">
    //TODO: afficher l'avatar récupéré de l'utilisateur et son nom, faire un espace avant le début des items
    <a className="menu-link menu-link--current">Accueil</a>
    {/* Je recupère au dessus le tableau depuis src/data
    Ci-dessous, je le map pour recupéré un item, je
    destructure cet item pour récupérer son id et son title
    je m'en sers pour générer autant de <a> que d'items dans
    le tableau
    {menuItems.map(({ id, title }) => (
      <a key={id} className="menu-link menu-link--current">{title}</a>
    ))}
    */}
    <a className="menu-link menu-link--current">Préférences</a>
    <a className="menu-link menu-link--current">Statistiques / Récompenses</a>
    <a className="menu-link menu-link--current">Me déconnecter</a>
    <a className="menu-link menu-link--current">Amis</a> 
    {/* <Friendlist friendList={friendList}/> */}
  </nav>
);

/* Nav.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired, 
}; */

export default Nav;
