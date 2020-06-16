import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import './style.scss';

const Signin = () => (
  <Grid className="center aligned">
    <Form>
      <div className="oauth">
        <Button circular color="facebook" icon="facebook" />
        <Button circular color="google plus" icon="google plus g" />
      </div>
      <Form.Field required>
        <label>Pseudo</label>
        <input placeholder="Pseudo" />
      </Form.Field>
      <Form.Field required>
        <label>E-mail</label>
        <input placeholder="E-mail" />
      </Form.Field>
      <Form.Field required>
        <label>Mot de passe</label>
        <input type="password" placeholder="Mot de passe" />
      </Form.Field>
      <Form.Field required>
        <label>Retapez votre mot de passe</label>
        <input type="password" placeholder="Retapez votre mot de passe" />
      </Form.Field>

      <Button color="blue" type="submit" className="center aligned">
        Créer un compte
    </Button>
    </Form>
  </Grid>
);

export default Signin;
