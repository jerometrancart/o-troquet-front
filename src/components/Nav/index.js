import React from 'react';
import Friendlist from 'src/containers/Friendlist';
import './style.scss';
import PropTypes from 'prop-types';

const Nav = ( { menuItems, username, isLogged, /* check */ } ) => (
  <nav className="menu">
    //TODO: afficher l'avatar récupéré de l'utilisateur et son nom, faire un espace avant le début des items
    <a className="menu-link menu-link--current">Accueil</a>
    {/* Je recupère au dessus le tableau depuis src/data
    Ci-dessous, je le map pour recupéré un item, je
    destructure cet item pour récupérer son id et son title
    je m'en sers pour générer autant de <a> que d'items dans
    le tableau
    */}
    {menuItems.map(({ id, title }) => (
      <a key={id} className="menu-link menu-link--current">{title}</a>
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
/*   check: PropTypes.func.isRequired,  */
  username: PropTypes.string.isRequired, 
  isLogged: PropTypes.bool.isRequired,
}; 

export default Nav;
