// == Import npm
import React, { useEffect, useHistory } from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation, Switch, Redirect } from 'react-router-dom';


// == Imports
import Header from 'src/containers/Header';
// import Welcome from 'src/components/Welcome';
import Nav from 'src/containers/Nav'
import Login from 'src/containers/Login';

import GamesListPage from 'src/containers/GamesListPage';
import GameboardPage from 'src/containers/GameboardPage/Fourtwentyone';
import Footer from 'src/components/Footer';
import AdminPage from 'src/components/AdminPage';
import Legal from 'src/components/Legal';
import Team from 'src/components/Team';
import './style.scss';
import { getRandomBackgroundImage } from 'src/selectors';
/*
https://codepen.io/Ruegen/pen/oYpEbm
https://codepen.io/omascaros/pen/CBapm
*/

// == Composant
const App = ({ isLogged, isAdmin, checkIsLogged, path, sideBar, roomId, webSocketDisconnect, loading, hasError }) => {
  // hook d'effet : s'applique après le chargement de l'application

  // const location = useLocation();
  useEffect(checkIsLogged, []);

  useEffect(getRandomBackgroundImage, []);

  // useEffect(webSocketDisconnect, []);

  // const history = useHistory();
  // console.log(history);

  // useEffect(() => {
  //   if ((roomId !== undefined) && (roomId !== null) && (roomId !== '')) {
  //     history.push('/gameboard/fourtwentyone/', { roomId });
  //   }
  // }, [roomId]);

  return (
    <div className="main">

      <Header />
      <div className="app">
        {isLogged
      && (
      <Nav />
      )}
        {!loading && hasError && (
          <p className="error">Une erreur s'est produite. Veuillez réessayer plus tard.</p>
        )}
        {!loading && !hasError && (
        <Switch>
          <Route exact path="/">
            {!isLogged
              && (
                <>
                  <h2 className="welcomeStranger">Bienvenue, faites comme chez vous (mais pas trop quand même, hein !) </h2>
                  <Login
                    isLogged={isLogged}
                  />
                </>
              )}
            {isLogged
              && (
              <Redirect to="/gameselect" />
              )}
          </Route>
          <Route exact path="/gameselect">
            {isLogged
                && (
                  <GamesListPage
                    isLogged={isLogged}
                  />
                )}
            {!isLogged
                && (
                <Redirect to="/" />
                )}
          </Route>
          <Route path="/gameboard/fourtwentyone/:roomId">
            {isLogged
              && (
                <GameboardPage
                  isLogged={isLogged}
                />
              )}
            {/* {!isLogged
              && (
              <Redirect to="/" />
              )} */}
          </Route>
          <Route exact path="/legal">
            <Legal />
          </Route>
          <Route exact path="/theteam">
            <Team />
          </Route>
          <Route exact path="/admin">
            <AdminPage
              isLogged={isLogged}
              isAdmin={isAdmin}
            />
          </Route>
          {/* <Route exact path="/signin">
            <Signin
              isLogged={isLogged}
              isAdmin={isAdmin}
            />
          </Route> */}
          <Route>
            <p className="error">404 fais gaffe dude</p>
          </Route>
        </Switch>
        )}
        {loading && (
          <p className="loading">Veuillez patienter. Nous ouvrons la boutique ...</p>
        )}
      </div>
      <Footer
        isAdmin={isAdmin}
      />
    </div>
  );
};

App.propTypes = {
  isLogged: PropTypes.bool,
  isAdmin: PropTypes.bool,
  path: PropTypes.string.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
  roomId: PropTypes.string,
  webSocketDisconnect: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLogged: false,
  isAdmin: false,
  roomId: '',
};

// == Export
export default App;
