import React from 'react';
import { Button, Image } from 'semantic-ui-react';


import './style.scss';

const GamesListPage = () => (
  <div className="playModes">
    <div className="modes">
      <Button color="blue" className="center aligned">Quick play
      </Button>
      <Button color="blue" className="center aligned">Invite friends
      </Button>
    </div>
    <div className="gamesVisuals">
    <Image.Group size='medium'>
      <Image
        // src="/home/etudiant/Bureau/html/APOTHÉOSE/obar - front/src/assets/images/perspective-dice-six-faces-six.svg"
        src="obar - front/src/assets/images/perspective-dice-six-faces-six.svg"
        as="a"
        href="https://www.regles-de-jeux.com/regle-du-421/"
        rounded
        alt="421 game"
      />
      <Image
        src="/src/assets/images/suits.svg"
        as="a"
        href="https://www.casinoonlinefrancais.info/blackjack/regles-du-jeu.html"
        rounded
        alt="Blackjack game"
      />
      </Image.Group>
      
      


    </div>
  </div>
);

export default GamesListPage;
