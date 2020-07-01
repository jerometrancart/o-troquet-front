import React from 'react';
import BLACKJACK from 'src/assets/images/blackjack.png';
import Field from 'src/containers/Login/Field';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import './style.scss';

const Profile = ({avatar, value, username, show, variant, textAlert}) => (
  <div className="profile">
    <div className="profile--page1">
      <h2 className="profile--title">Profil</h2>
      <img
        className="ProfilPicture"
        src={avatar}
        alt=""
      />
      <span className="profile--username">{username}Bob</span>
      <Button color="blue" type="submit" className="center aligned profile--button"> Supprimer mon compte</Button>
      <Button color="blue" type="submit" className="center aligned profile--button"> Modifier mes informations </Button>
    </div>
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
          <Button color="blue" type="submit" className="center aligned profile--button"> Modifier </Button>
        </form>
      </Grid>
    </div>

  </div>
);

export default Profile;
