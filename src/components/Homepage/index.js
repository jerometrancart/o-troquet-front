// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Welcome from 'src/components/Welcome';
import Login from 'src/components/Login';
import Signin from 'src/components/Signin';
import Footer from 'src/components/Footer';

import './style.scss';

// == Composant
const Homepage = () => (
  <div className="app">
    <Header />
    <Welcome />
    <Login />
    <Signin />
    <Footer />
  </div>
);

// == Export
export default Homepage;
