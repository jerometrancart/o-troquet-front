// == Import npm
import React, { useEffect } from 'react';

// == Import
import Header from 'src/components/Header';
import Welcome from 'src/components/Welcome';
import Login from 'src/components/Login';
import Signin from 'src/components/Signin';
import Footer from 'src/components/Footer';
import './styles.scss';


/*
https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f
https://codepen.io/Ruegen/pen/oYpEbm
https://codepen.io/omascaros/pen/CBapm
*/


// == Composant
const App = () => (

  useEffect(() => {
    const backgroundImage = new Array ();
      backgroundImage[0] = "https://images.unsplash.com/photo-1581442762865-54b07def988b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80";
      backgroundImage[1] = "https://images.unsplash.com/photo-1570227923466-c86256715853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
      backgroundImage[2] = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80";
      backgroundImage[3] = "https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

    const random = Math.floor(Math.random() * backgroundImage.length);

    document.body.style.backgroundImage = "url("+backgroundImage[random]+")";





}, []),




  
  <div className="app">
    <Header />
    <Welcome />
    <Login />
    <Signin />
    <Footer />
  </div>



);

// == Export
export default App;
