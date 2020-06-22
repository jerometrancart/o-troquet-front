import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import Field from 'src/containers/Login/Field';
import './style.scss';

const Signin = () => (
    <Grid className="center aligned">     
        <h2 className="form-title">Inscription</h2>
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
          name="password-verify"
          placeholder="Vérification du mot de passe"
        />
        <Button color="blue" type="submit" className="center aligned">
          Créer un compte
        </Button>    
    </Grid>
);

export default Signin;
