import React, { useEffect } from 'react';
import { Button, Image } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import resources
import Dice from 'src/assets/images/421 black.png';
import Blackjack from 'src/assets/images/blackjack-wip.png';
import Soon from 'src/assets/images/soon.png';

import './style.scss';

const GamesListPage = ({ isLogged, username, webSocketConnect, webSocketDisconnect, webSocketGetRoom, webSocketCreateRoom, webSocketJoinRoom }) => {
  /*
  if (!isLogged) {
    return <Redirect to="/" />;
  }

  */
  useEffect(webSocketDisconnect);
  // useEffect(() => {
  //   console.log('je veux me connecter au websocket socket.io');
  //   webSocketConnect();
  // }, []);
  return (
    <>
      <h2 className="welcome">Bienvenue <span className="userPseudo">{username}</span>, qu'est-ce qu'on te sert ?</h2>
      <div className="playModes">
        <div className="modes">
          {/* <Link to="/gameboard/fourtwentyone"> */}
          <Button className="center aligned" onClick={webSocketGetRoom}>Quick play
          {/* <Button className="center aligned" onClick={webSocketJoinRoom.bind(this, roomId)}>Quick play */}
          </Button>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <Button className="center aligned" onClick={webSocketCreateRoom}>Invite friends
          </Button>
          {/* </Link> */}
        </div>
        <div className="gamesVisuals">
          <Image.Group size="small">
            <div className="coupleImages">
              {/* <Link to="/gameboard/fourtwentyone/:roomId"> */}
              <Image
                src={Dice}
                rounded
                alt="421 game"
                onClick={webSocketGetRoom}
                // onClick={webSocketJoinRoom.bind(this, roomId)}
              />
              {/* </Link> */}
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
  webSocketConnect: PropTypes.func.isRequired,
  webSocketGetRoom: PropTypes.func.isRequired,
  webSocketCreateRoom: PropTypes.func.isRequired,
  roomId: PropTypes.string,
};
GamesListPage.defaultProps = {
  roomId: '',
};
export default GamesListPage;
