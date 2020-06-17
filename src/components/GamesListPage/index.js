import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import Dice from 'src/assets/images/421 black.png';
import Blackjack from 'src/assets/images/blackjack.png'

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
      <Image.Group size="small">
      <div className="coupleImages">
        <Image
          src={Dice}
          as="a"
          href="https://www.regles-de-jeux.com/regle-du-421/"
          rounded
          alt="421 game"
        />
        <Image
          src={Blackjack}
          as="a"
          href="https://www.casinoonlinefrancais.info/blackjack/regles-du-jeu.html"
          rounded
          alt="Blackjack game"
        />
        </div>
        <div className="coupleImages">
          <Image
            src="https://via.placeholder.com/150.png/ccc/000/?text=Work+in+progress"
            as="a"
            href="https://www.placeholder.com"
            rounded
            alt="Work in progress"
          />
          <Image
            src="https://via.placeholder.com/150.png/ccc/000/?text=Work+in+progress"
            as="a"
            href="https://www.placeholder.com"
            rounded
            alt="Work in progress"
          />
        </div>
      </Image.Group>
        
      


    </div>
  </div>
);

export default GamesListPage;
