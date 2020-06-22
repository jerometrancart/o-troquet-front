import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import resources
import Dice from 'src/assets/images/421 black.png';
import Blackjack from 'src/assets/images/blackjack-wip.png';
import Soon from 'src/assets/images/soon.png';

import './style.scss';

const GamesListPage = ({ isLogged, username }) => {
  /*
  if (!isLogged) {
    return <Redirect to="/" />;
  }
  */
  return (
    <>
      <h2 className="welcome">Bienvenue <span className="userPseudo">{username}</span>, qu'est-ce qu'on te sert?</h2>
      <div className="playModes">
        <div className="modes">
          <Link to="/gameboard/fourtwentyone">
            <Button className="center aligned">Quick play
            </Button>
          </Link>
          <Link to="/">
            <Button className="center aligned">Invite friends
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
    </>
  );
};

GamesListPage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

export default GamesListPage;
