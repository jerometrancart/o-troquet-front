import React from 'react';
import Modali, { useModali } from 'modali';
// import Friendlist from 'src/components/Friendlist';
import Blackjack from 'src/assets/images/dice-fire.png';
import Heart from 'src/assets/images/heart.png';
import './style.scss';
import PropTypes from 'prop-types';

// Composants


const Nav = () => {
  const [StatsModal, toggleStatsModal] = useModali({
    animated: true
  });

  const [ProfilModal, toggleProfilModal] = useModali({
    animated: true
  });


  return (
    <nav className="menu">
      <a className="menu-link menu-link--current">Accueil</a>
      <a className="menu-link menu-link--current" onClick={toggleProfilModal}>Profil</a>
      <Modali.Modal {...ProfilModal}>
      <nav className="onglets">
        <a>Statistiques</a>
        <a>Profil</a>
      </nav>

      <div class="field">
        <input 
        autocomplete="on" 
        name="username" 
        class="field-input" 
        type="text" 
        placeholder="Pseudo" 
        value=""/>
        <label for="field-username" class="field-label">
          Pseudo
        </label>
      </div>

    <div class="field">
      <input 
      autocomplete="on" 
      name="password" 
      class="field-input" 
      type="password" 
      placeholder="Mot de passe" 
      value=""/>
      <label for="field-password" class="field-label">Mot de passe</label>
    </div>

    <img 
        className="ProfilPicture"
        src={Blackjack}
        alt="Gagnez 50 parties"
    /> 

    <button className="AvatarButton">changer d'avatar</button>
      </Modali.Modal>



      <a className="menu-link menu-link--current" onClick={toggleStatsModal}>Statistiques / Récompenses</a>
      <Modali.Modal {...StatsModal}>
      
        <nav className="onglets">
          <a>Statistiques</a>
          <a>Profil</a>
        </nav>
        <div className="stats">
          <ul>parties jouées :</ul>
          <ul>254</ul>
          <ul>Parties perdues :</ul>
          <ul>42 </ul>
          <ul>Parties jouées :</ul>
          <ul>296</ul>
        </div>

        <div className="Achievement">
          <h3 className="Achievement-title">Achievement/Succès</h3>

          <p className="game-Achievement">421</p>
          <img 
            className="Achievement-img"
            src={Blackjack}
            alt=""
          /> 
           <img 
            className="Achievement-img"
            src={Blackjack}
            alt="Gagnez 50 parties"
          /> 
           <img 
            className="Achievement-img"
            src={Blackjack}
            alt=""
          /> 

          <p className="game-Achievement">Black Jack</p>
          <img 
            className="Achievement-img"
            src={Heart}
            alt=""
          /> 
           <img 
            className="Achievement-img"
            src={Heart}
            alt=""
          /> 
           <img 
            className="Achievement-img"
            src={Heart}
            alt=""
          /> 

        </div>
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
