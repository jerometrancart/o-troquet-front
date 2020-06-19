import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import resources
import Dice from 'src/assets/images/421 black.png';
import Blackjack from 'src/assets/images/blackjack.png';

import './style.scss';

const GamesListPage = ({ isLogged }) => {
  /*
  if (!isLogged) {
    return <Redirect to="/" />;
  }
  */
  return (
    <div className="playModes">
      <div className="modes">
        <Link to="/gameboard/fourtwoone">
          <Button color="blue" className="center aligned">Quick play
          </Button>
        </Link>
        <Link>
          <Button color="blue" className="center aligned">Invite friends
          </Button>
        </Link>
      </div>
      <div className="gamesVisuals">
        <Image.Group size="small">
          <div className="coupleImages">
            <Image
              src={Dice}
              as="a"
              href="/gameboard/fourtwoone"
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
};

GamesListPage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default GamesListPage;
