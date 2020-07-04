import React from 'react';
import BLACKJACK from 'src/assets/images/blackjack.png';
import Heart from 'src/assets/images/heart.png';
import Modali, { useModali } from 'modali';
import Achievement from './Achievement';

// import './style.scss";

const Stats = ({ achievements }) => {

  return (
    
      <div className="stats">
        <nav className="onglets">
          <a>Statistiques</a>
          <a>Profil</a>
        </nav>
        <div>
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

          {achievements.map((achievement) => (
            <Achievement key={achievement.id} {...achievement} />
          ))}
          {/* <img
            className="Achievement-img"
            src={icon}
            alt="{phrase}"
          />} */}

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
      </div>
  );
};
// </Modali.Modal>

export default Stats;
