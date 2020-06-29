// == Import npm
import React, { useEffect, useHistory } from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation, Switch, Redirect } from 'react-router-dom';

// == Import
import Header from 'src/containers/Header';
// import Welcome from 'src/components/Welcome';
import Login from 'src/containers/Login';
import Signin from 'src/containers/Signin';
import GamesListPage from 'src/containers/GamesListPage';
import GameboardPage from 'src/containers/GameboardPage/Fourtwentyone';
import Footer from 'src/components/Footer';
import SideBar from 'src/components/Nav/SideBar.js';
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
const App = ({ isLogged, isAdmin, checkIsLogged, path, sideBar, roomId, webSocketDisconnect }) => {
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
      {sideBar
      && <SideBar className="sidemenu" pageWrapId="page-wrap" outerContainerId="App" />}
      <div className="app">
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
          <Route exact path="/gameboard/fourtwentyone/:slug">
            {isLogged
              && (
                <GameboardPage
                  isLogged={isLogged}
                />
              )}
            {!isLogged
              && (
              <Redirect to="/" />
              )}
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
