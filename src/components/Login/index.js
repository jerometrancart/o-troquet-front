// import des librairies
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Grid } from "semantic-ui-react";

// import composants
import Oauth from 'src/components/Oauth';
import Signin from 'src/components/Signin';

// import de styles
import './style.scss';


const Login = ({ signinPage, loginPage }) => (
  <>
    { loginPage
              && (
              <Grid className="center aligned">
                <Form className="form-login">
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
              </Grid>
              )}

    { signinPage
         && (
         <Signin />
         )}
  </>
);

Login.propTypes = {
  signinPage: PropTypes.bool,
  loginPage: PropTypes.bool,
};

Login.defaultProps = {
  signinPage: false,
  loginPage: true,
};

export default Login;
