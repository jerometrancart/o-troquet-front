import React from 'react';
import PropTypes from 'prop-types';
import Member from './Member';
import Caribou1 from 'src/assets/images/caribou1.png';
import Caribou2 from 'src/assets/images/caribou2.png';
import Caribou3 from 'src/assets/images/caribou3.png';
import Caribou4 from 'src/assets/images/caribou4.png';
import Caribou5 from 'src/assets/images/caribou5.png';

import './style.scss';

const Team = () => (
  <div className="team">
    <h2 className="team--title">La Team O'Troquet</h2>
    <Member
      img={Caribou2}
      name="Florian"
      post="Lead dev back"
      text="Dev back (Symfony), superhéros de l'interface Back-Office"
      className="team--member--1st"
    />
    <Member
      img={Caribou3}
      name="Damien"
      post="Git master"
      text="Dev back (Symfony), héros sans peur, destructeur de serveurs, Pokedex des endpoints"
    />
    <Member
      img={Caribou4}
      name="Thomas"
      post="Product Owner, Lead dev front"
      text="Initiateur du projet et référent technique (acharné) socket-io"
    />
    <Member
      img={Caribou1}
      name="Clément"
      post="Référent technique général"
      text="Dev front, fournisseur de librairies et de technologies bien pratiques en tous genres, membre de la secte des adorateurs de Grafikart."
    />
    <Member
      img={Caribou5}
      name="Jérôme"
      post="Scrum master"
      text="Dev front, meneur de réunions interminables du matin, communique les infos entre l'API du back et le front, traumatisé à vie par les CORS"
    />
  </div>
);

/*
Team.propTypes = {
  isAdmin: PropTypes.bool,
};
Team.defaultProps = {
  isAdmin: false,
};
*/

export default Team;
