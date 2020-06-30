import React from 'react';
import Modali, { useModali } from 'modali';
import BLACKJACK from 'src/assets/images/blackjack.png';
import { changeValue } from 'src/actions';

const Profile = ({
  username,
  password,
  avatar,
  value,
  ProfilModal,
}) => (
  <Modali.Modal className="stats" {...ProfilModal}>
    <div className="profile">
      <nav className="onglets">
        <a>Statistiques</a>
        <a>Profil</a>
      </nav>
      <form>
        <div className="field">
          <input
            autoComplete="on"
            name={username}
            className="field-input"
            type="text"
            placeholder="Pseudo"
            value={value}
            onChange={(event) => {
              changeValue(event.target.value);
            }}
          />
          <label className="field-label">
            Pseudo
          </label>
        </div>
        <div className="field">
          <input
            autoComplete="on"
            name={password}
            className="field-input"
            type="password"
            placeholder="Mot de passe"
            value={value}
            onChange={(event) => {
              changeValue(event.target.value);
            }}
          />
          <label className="field-label">Mot de passe</label>
        </div>
        <div>
          <input type="submit" value="Envoyer" />
        </div>
      </form>
      <img
        className="ProfilPicture"
        src={BLACKJACK}
        alt=""
      />

      <button type="submit" className="AvatarButton">Supprimer son compte</button>
    </div>
  </Modali.Modal>
);

export default Profile;
