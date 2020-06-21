import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import resources
import Dice from 'src/assets/images/421 black.png';
import Blackjack from 'src/assets/images/blackjack-wip.png';
import Soon from 'src/assets/images/soon.png';

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
        <Link to="/gameboard/fourtwentyone">
          <Button color="blue" className="center aligned">Quick play
          </Button>
        </Link>
        <Link to="/">
          <Button color="blue" className="center aligned">Invite friends
          </Button>
        </Link>
      </div>
      <div className="gamesVisuals">
        <Image.Group size="small">
          <div className="coupleImages">
            <Link to="/gameboard/fourtwentyone">
              <Image
                src={Dice}
                rounded
                alt="421 game"
              />
            </Link>
            <Image
              src={Blackjack}
              rounded
              alt="Blackjack game - work in progress"
            />
          </div>
          <div className="coupleImages">
            <Image
              src={Soon}
              rounded
              alt="Soon"
            />
            <Image
              src={Soon}
              rounded
              alt="Soon"
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
