// import des librairies
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Grid } from "semantic-ui-react";
import { Link, useHistory } from 'react-router-dom';

// import composants
import Oauth from 'src/components/Oauth';
import Signin from 'src/components/Signin';

// import de styles
import './style.scss';

const Login = ({ isLogged, login, logout }) => {
  const history = useHistory();
  const handleLogin = () => {
    console.log('ok connexion');
    login();
    history.push('/gameselect');
  };
  return (
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
          <input placeholder="Pseudo" />
        </Form.Field>
        <Form.Field required>
          <label>Mot de passe</label>
          <input type="password" placeholder="Mot de passe" />
        </Form.Field>
        <Button color="blue" type="submit" className="center aligned">Connexion
        </Button>
      </Form>
      <p className="signin">Vous n'avez pas de compte ?&nbsp;
        <Link to="/signin">Inscrivez-vous ^^
        </Link>
      </p>
    </Grid>
  );
};

Login.propTypes = {
  isLogged: PropTypes.bool,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

Login.defaultProps = {
  isLogged: false,
};

export default Login;
