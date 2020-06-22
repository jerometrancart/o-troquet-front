import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Login/Field';
import './style.scss';

const Signin = ({ isLogged, register }) => {
  if (isLogged) {
    // history.push('/gameselect');
    return (
      <Redirect to="/gameselect" />
    );
  }
  const handleSignin = (evt) => {
    evt.preventDefault();
    console.log('ok inscription');
    register();
    // history.push('/gameselect');
  };
  return (
    <Grid className="center aligned">
      <h2 className="form-title">Je m'inscris </h2>
      <form autoComplete="on" className="signin-form-element" onSubmit={handleSignin}>
        <div className="oauth">
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="google plus" icon="google plus g" />
        </div>
        <Field
          name="username"
          placeholder="Pseudo"
        />
        <Field
          name="email"
          placeholder="E-mail"
        />
        <Field
          type="password"
          name="password"
          placeholder="Mot de passe"
        />
        <Field
          type="password"
          name="passwordVerify"
          placeholder="Vérification du mot de passe"
        />
        <Button color="blue" type="submit" className="center aligned">
          Créer un compte
        </Button>
      </form>
    </Grid>
  );
};
Signin.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

export default Signin;
