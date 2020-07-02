// import des librairies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import Modali, { useModali } from 'modali';

// import composants
// import Oauth from 'src/components/Oauth';
import Field from 'src/containers/Login/Field';
import Signin from 'src/containers/Signin';

// import de styles
import './style.scss';

const Login = ({ isLogged, login, show, variant, textAlert, webSocketDisconnect, roomId }) => {
  const history = useHistory();
  const [signinModal, toggleSigninModal] = useModali({
    animated: true
  });
  if (isLogged) {
    history.push('/gameselect');
    /* return (
      <Redirect to="/gameselect" />
    ); */
  }

  const handleLogin = (evt) => {
    evt.preventDefault();
    console.log('ok connexion');
    login();
    history.push('/gameselect');
  };
  // useEffect(webSocketDisconnect)
  useEffect(() => {
    // focus sur l'input du pseudo au premier chargement de la page
    const usernameInput = document.querySelector("input[name='username']");
    console.log(usernameInput);
    usernameInput.focus();
  }, []);

  return (
    <Grid className="center aligned">
      <form autoComplete="on" className="login-form-element" onSubmit={handleLogin}>
        <h2 className="form-title">Je me connecte </h2>
        <Message className={show} color={variant}>
          {textAlert}
        </Message>
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
      <p className="signup">Vous n'avez pas de compte ?
      </p>
      <a className="signup-link" onClick={toggleSigninModal}>Inscrivez-vous ^^
      </a>
      <Modali.Modal {...signinModal}>
        <Signin />
      </Modali.Modal>
    </Grid>
  );
};

Login.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  // toggleSigninModal: PropTypes.func.isRequired,

  show: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  textAlert: PropTypes.string.isRequired,
  alertShow: PropTypes.func.isRequired,
  webSocketDisconnect: PropTypes.func.isRequired,
};
/*
Login.defaultProps = {
  isLogged: false,
};
*/
export default Login;
