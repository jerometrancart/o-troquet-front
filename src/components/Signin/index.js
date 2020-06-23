import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Login/Field';
// import Alert from 'react-bootstrap/Alert';
import './style.scss';

const Signin = ({ isLogged, register, alertShow, show, variant, textAlert }) => {
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
        {/* show, si j'ai une alerte à afficher,
        quand le formulaire est soumis avec succès,
        quand le mdp n'est pas valide, quand le compte
        existe déjà, quand le compte est banni
        variant sera l'expression du succes ou du danger
        textAlert est le contenu du texte de la réponse de l'API ou de la regex
        */}
        <Message className={show} color={variant}>
          {textAlert}
        </Message>
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
  show: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  textAlert: PropTypes.string.isRequired,
  alertShow: PropTypes.func.isRequired,
};

export default Signin;
