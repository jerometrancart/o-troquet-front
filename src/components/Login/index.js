// import des librairies
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Grid } from "semantic-ui-react";
import { Link, useHistory, Redirect } from 'react-router-dom';

// import composants
import Oauth from 'src/components/Oauth';
import Field from 'src/containers/Login/Field';
import Signin from 'src/components/Signin';

// import de styles
import './style.scss';

const Login = ({ isLogged, login, logout }) => {
  const history = useHistory();
  if (isLogged) {
    // history.push('/gameselect');
    return (
      <Redirect to="/gameselect" />
    );
  }
  const handleLogin = () => {
    console.log('ok connexion');
    login();
    history.push('/gameselect');
  };
  return (
    <Grid className="center aligned">
      <form autoComplete="off" className="login-form-element" onSubmit={handleLogin}>
        <h2 className="form-title">Je me connecte </h2>
        <Oauth />
        <div className="oauth">
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="google plus" icon="google plus g" />
        </div>
        <Field
          name="username"
          placeholder="Pseudo"
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
        />
        <Button color="blue" type="submit" className="center aligned">Connexion
        </Button>
      </form>
      <p className="forgotten">
        <Link to="/">Mot de passe oublié
        </Link>
      </p>
      <p className="signin">Vous n'avez pas de compte ?&nbsp;
        <Link to="/signin">Inscrivez-vous ^^
        </Link>
      </p>
    </Grid>
    /*
    <Grid className="center aligned">
      <Form
        className="form-login"
        onSubmit={handleLogin}
      >
        <h2 className="form-title">Je me connecte </h2>
        <Oauth />
        <div className="oauth">
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="google plus" icon="google plus g" />
        </div>
        <Form.Field required>
          <label>Pseudo</label>
          <Field placeholder="Pseudo" type="text" name="username" />
        </Form.Field>
        <Form.Field required>
          <label>Mot de passe</label>
          <Field type="password" placeholder="Mot de passe" name="password" />
        </Form.Field>
        <Button color="blue" type="submit" className="center aligned">Connexion
        </Button>
      </Form>
      <p className="forgotten">
        <Link to="/">Mot de passe oublié
        </Link>
      </p>
      <p className="signin">Vous n'avez pas de compte ?&nbsp;
        <Link to="/signin">Inscrivez-vous ^^
        </Link>
      </p>
    </Grid>
    */
  );
};

Login.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
/*
Login.defaultProps = {
  isLogged: false,
};
*/
export default Login;
