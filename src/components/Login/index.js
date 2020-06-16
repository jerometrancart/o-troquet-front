import React from 'react';
import Oauth from 'src/components/Oauth';
// import 

import './style.scss';

const Login = () => (
  <form className="form-login">
    <h2 className="form-title">Je me connecte </h2>
    <Oauth />
    <input className="form-input" type="text" placeholder="Identifiant" />
    <input className="form-input" type="password" placeholder="Mot de passe" />
    <button className="form-button" type="submit">Connexion</button>
  </form>
);

export default Login;
