import React from 'react';
import Field from 'src/containers/Login/Field';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import './style.scss';
import PropTypes from 'prop-types';

const Profile = ({ profileEmail, profileUsername, open, toggleOpen, toggleClose, /* show, variant, textAlert */
}) => {
  if (!open) {
    return (
      <div className="profile">
        <div className="profile--page1">
          <h2 className="profile--title">Profil</h2>
          <img
          className="ProfilPicture"
          /* src={avatar} */
          alt=""
          />
          <span className="profile--username">{profileUsername}</span>
          <span className="profile--email">{profileEmail}</span>
          <Button color="blue" className="center aligned profile--button"> Supprimer mon compte</Button>
          <Button color="blue" onClick={toggleOpen} className="center aligned profile--button"> Modifier mes informations </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="profile">
      <div className="profile--page2">
        <Grid className="center aligned">
          <h2 className="profile--title">Modifier mon compte </h2>
          <form className="profil--page2--form">
            {/* <Message className={show} color={variant}>
              {textAlert}
            </Message> */}
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
              name="old-password"
              placeholder="Mot de passe actuel"
            />
            <Field
              type="password"
              name="new-password"
              placeholder="Nouveau mot de passe"
            />
            <Field
              type="password"
              name="new-passwordVerify"
              placeholder="Confirmer le mot de passe"
            />
            <Button color="blue" className="center aligned profile--button"> Modifier </Button>
            <Button color="blue" onClick={toggleClose} className="center aligned profile--button"> Retour </Button>
          </form>
        </Grid>
      </div>
    </div>
  );
};

// Nav.propTypes = {
//  profileEmail:PropTypes.string.isRequired,
//  ProfileUsername: PropTypes.string.isRequired,
// };

export default Profile;
