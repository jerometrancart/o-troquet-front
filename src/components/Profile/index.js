import React from 'react';
import Field from 'src/containers/Login/Field';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import './style.scss';
import PropTypes from 'prop-types';

const Profile = ({ email, username, avatar, open, toggleOpen, toggleClose, updateUser,/* show, variant, textAlert */
}) => {
  const handleUpdateUser = (evt) => {
    evt.preventDefault();
    updateUser();
  };
  if (!open) {
    return (
      <div className="profile">
        <div className="profile--page1">
          <h2 className="profile--title">Mon profil</h2>
          <img
            className="profile--picture"
            src={avatar}
            alt=""
          />
          <p className="profile--text"><span className="profile--text--lorem">Pseudo : </span>{username}</p>
          <p className="profile--text"><span className="profile--text--lorem">E-mail : </span>{email}</p>
          <Button color="blue" className="center aligned profile--button"> Supprimer mon compte</Button>
          <Button color="blue" onClick={toggleOpen} className="center aligned profile--button"> Modifier mes informations </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="profile" id="profile">
      <div className="profile--page2">
        <Grid className="center aligned">
          <h2 className="profile--title">Modifier mon compte </h2>
          <form className="profil--page2--form" onSubmit={handleUpdateUser}>
            {/* <Message className={show} color={variant}>
              {textAlert}
            </Message> */}
            <Field
              name="username"
              placeholder="Pseudo"
              value={username}
            />
            <Field
              name="email"
              placeholder="E-mail"
              value={email}
            />
            <Field
              type="password"
              name="password"
              placeholder="Mot de passe actuel"
            />
            <Field
              type="password"
              name="newPassword"
              placeholder="Nouveau mot de passe"
            />
            <Field
              type="password"
              name="newPasswordVerify"
              placeholder="Confirmer le mot de passe"
            />
            <Button color="blue" type="submit" className="center aligned profile--button"> Modifier </Button>
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
