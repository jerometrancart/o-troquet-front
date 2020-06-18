// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation, Switch } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Welcome from 'src/components/Welcome';
import Login from 'src/containers/Login';
import GamesListPage from 'src/containers/GamesListPage';
import GameboardPage from 'src/components/GameboardPage';
import Footer from 'src/components/Footer';
import SideBar from 'src/components/Nav/SideBar.js';
import AdminPage from 'src/components/AdminPage';
import Legal from 'src/components/Legal';
import Team from 'src/components/Team';
import './styles.scss';


/*
https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f
https://codepen.io/Ruegen/pen/oYpEbm
https://codepen.io/omascaros/pen/CBapm
*/


// == Composant
const App = ({ isLogged, isAdmin, checkIsLogged, path, sideBar }) => {
  // hook d'effet : s'applique après le chargement de l'application

  const location = useLocation();
  useEffect(checkIsLogged, []);
  useEffect(() => {
    // création d'un tableau contenant des belles images de bar
    const backgroundImage = new Array ();
    backgroundImage[0] = "https://images.unsplash.com/photo-1581442762865-54b07def988b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80";
    backgroundImage[1] = "https://images.unsplash.com/photo-1570227923466-c86256715853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
    backgroundImage[2] = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80";
    backgroundImage[3] = "https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    backgroundImage[4] = "https://images.pexels.com/photos/858466/pexels-photo-858466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    backgroundImage[5] = "https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    backgroundImage[6] = "https://images.unsplash.com/photo-1564223269775-8130cb84f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1932&q=80";
    backgroundImage[7] = "https://images.unsplash.com/photo-1497644083578-611b798c60f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
    backgroundImage[8] = "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
    backgroundImage[9] = "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80";
    backgroundImage[10] = "https://images.unsplash.com/photo-1519214605650-76a613ee3245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80";
    backgroundImage[11] = "https://images.unsplash.com/photo-1482112048165-dd23f81c367d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
    backgroundImage[12] = "https://images.unsplash.com/photo-1468056961052-15507578a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80";
    backgroundImage[13] = "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80";
    backgroundImage[14] = "https://images.unsplash.com/photo-1503876466-1fc5143eda57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80";
    backgroundImage[15] = "https://images.unsplash.com/photo-1528219086320-73c3c9558a26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=677&q=80";
    // backgroundImage[16] = "https://images.unsplash.com/photo-1506712465535-e301badbc49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80";

    // création d'une variable tirée au hasard, entier entre 0 et la longueur du tableau
    const random = Math.floor(Math.random() * backgroundImage.length);

    // application de l'image tirée au sort sur le fond de l'appli (balise body)
    document.body.style.backgroundImage = 'url(' + backgroundImage[random] + ')';
  }, [location]);

  return (
    <div className="app">
      <Header />
      {sideBar
      && <SideBar pageWrapId="page-wrap" outerContainerId="App" />}
      <Switch>
        <Route exact path="/">
          {!isLogged
            && (
              <>
                <Welcome />
                <Login />
              </>
            )}
        </Route>
        <Route exact path="/gameselect">
          <GamesListPage
            isLogged={isLogged}
          />
        </Route>
        <Route exact path="/gameboard/fourtwoone">
          <GameboardPage
            isLogged={isLogged}
          />
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
        <Route>
          <p>404 fais gaffe dude</p>
        </Route>
      </Switch>
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
};

App.defaultProps = {
  isLogged: false,
  isAdmin: false,
};

// == Export
export default App;
