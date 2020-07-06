/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import Modali, { useModali } from 'modali';
import Friendlist from 'src/containers/Friendlist';
import Profile from 'src/containers/Profile';
import './style.scss';
import { NavLink } from 'react-router-dom';
import { Plus } from 'react-feather';
import Stats from 'src/containers/Stats';


// Composants
/*
const Nav = (friendList) => {
  const [StatsModal, toggleStatsModal] = useModali({
    animated: true,
    centered: true,
  });

  const [ProfilModal, toggleProfilModal] = useModali({
    animated: true,
    centered: true,
  });

*/

// Composants
/*
const Nav = (friendList) => {
  return (
    <nav className="menu">
      <a className="menu-link menu-link--current">Accueil</a>
      <a className="menu-link menu-link--current" onClick={toggleProfilModal}>Profil</a>
      <Profile />
      <a className="menu-link menu-link--current" onClick={toggleStatsModal}>Statistiques / Récompenses</a>
      <Stats />
      <a className="menu-link menu-link--current">Amis</a>
      <a className="menu-link menu-link--current">Retour au bar</a>
      */

const Nav = ({ clickHome }) => {
  const [StatsModal, toggleStatsModal] = useModali({
    animated: true,
    centered: true,
  });

  const [ProfilModal, toggleProfilModal] = useModali({
    animated: true,
    centered: true,
  });
  return (
    <nav className="menu">
      {/* <button type="button" className="menu-toggler"> <Plus color="#5C5874" size="100%" /></button> */}
      <NavLink
        to="/gameselect"
        onClick={clickHome}
        exact
        className="menu-link"
        activeclassname="menu-link--current"
      >Accueil
      </NavLink>
      <a className="menu-link" onClick={toggleProfilModal}>Profil</a>
      <Modali.Modal className="stats" {...ProfilModal}>
        <Profile />
      </Modali.Modal>
      <a className="menu-link" onClick={toggleStatsModal}>Statistiques / Récompenses</a>
      <Modali.Modal className="stats" {...StatsModal}>
        <Stats />
      </Modali.Modal>
      <NavLink
        to="/gameselect"
        onClick={clickHome}
        exact
        className="menu-link"
        activeclassname="menu-link--current"
      >Retour au bar
      </NavLink>

      <Friendlist />
    </nav>
  );
};

/* Je recupère au dessus le tableau depuis src/data 

const Nav = ({ menuItems, username, isLogged, check } ) => (

// const Nav = ( { menuItems, username, isLogged, } ) => (

  <nav className="menu">
    <button type="button" className="menu-toggler"> <Plus color="#5C5874" size="100%" /></button>
    <NavLink
      to="/gameselect"
      exact
      className="menu-link"
      activeclassname="menu-link--current"
    >Accueil
    </NavLink>

    {menuItems.map(({ id, title, url }) => (
      <NavLink
        to={url}
        key={id}
        className="menu-link"
        activeclassname="menu-link--current"
      >{title}
      </NavLink>
    ))}
    <Friendlist />
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
*/
export default Nav;
