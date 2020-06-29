import React from 'react';
import Modali, { useModali } from 'modali';
// import Friendlist from 'src/components/Friendlist';
import Profile from 'src/containers/Profile';

import './style.scss';
import PropTypes from 'prop-types';
import Stats from 'src/containers/Stats';

// Composants
const Nav = () => {
  const [StatsModal, toggleStatsModal] = useModali({
    animated: true,
  });

  const [ProfilModal, toggleProfilModal] = useModali({
    animated: true,
  });

  return (
    <nav className="menu">
      <a className="menu-link menu-link--current">Accueil</a>
      <a className="menu-link menu-link--current" onClick={toggleProfilModal}>Profil</a>
      <Modali.Modal className="stats" {...ProfilModal}>
        <Profile />
      </Modali.Modal>
      <a className="menu-link menu-link--current" onClick={toggleStatsModal}>Statistiques / Récompenses</a>
      <Modali.Modal className="stats" {...StatsModal}>
        <Stats />
      </Modali.Modal>
      <a className="menu-link menu-link--current">Amis</a>
      <a className="menu-link menu-link--current">Retour au bar</a>
    </nav>
  );
};

/* Nav.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired, 
}; */

export default Nav;



    /* Je recupère au dessus le tableau depuis src/data
    Ci-dessous, je le map pour recupéré un item, je
    destructure cet item pour récupérer son id et son title
    je m'en sers pour générer autant de <a> que d'items dans
    le tableau
    {menuItems.map(({ id, title }) => (
      <a key={id} className="menu-link menu-link--current">{title}</a>
    ))}
      <nav className="menu">
    <a className="menu-link menu-link--current">Accueil</a>

    <a className="menu-link menu-link--current">Profil</a>
    <a className="menu-link menu-link--current">Statistiques / Récompenses</a>
    <a className="menu-link menu-link--current">Amis</a>
    <a className="menu-link menu-link--current">Retour au bar</a>
  </nav>
    */
