import { LOGIN, changeValue, authSuccess, CHECK, connect, REGISTER, LOGOUT } from 'src/actions/user';

import axios from 'axios';
import jwt from 'jwt-decode';

// const authenticationURI = 'damien-belingheri.vpnuser.lan:8000/api/';
// http://ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/v1/users
// POST
const authenticationURI = 'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/';
const authenticationURIAdministration = 'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/login';

const auth = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case LOGIN: {
      const data = {
        username: state.user.username,
        password: state.user.password,
      };
      console.log(data);

/* =========  REQUETE AXIOS   ==============  */

      axios.post(`http://${authenticationURI}login_check`, {
        username: state.user.username,
        password: state.user.password,
      },
      // { withCredentials: true },
      )
        .then((response) => {
          // console.log('response', response.data);
          const actionToDeletePassword = changeValue('password', '');
          store.dispatch(actionToDeletePassword);
          const { token } = response.data;
          const user = jwt(token); // decode your token here
          localStorage.setItem('tokenOTroquet', token);
          // j'ai le token fourni par l'api
          // mon intention : ranger ce pseudo dans le state
          // je vais dispatcher une action
          // const actionToSaveToken = changeValue('tokenOTroquet', response.data.token);
          const actionToSavePseudo = changeValue('pseudo', response.data.username);
          // store.dispatch(actionToSaveToken);
          store.dispatch(actionToSavePseudo);

          store.dispatch(authSuccess(token, user));
        })
        .catch((error) => {
          console.error(error);
        });

      /* =========    FIN REQUETE AXIOS    ============= */
/*

 {
  headers: {
    'Content-Type': 'application/json',
  },
}

      username: Sdarlz
      password: 729Cbk192!
      
      username: jerome
      password: bobkor3

      username : damien
      password: root

      
    username: Damien38,
    password: 729Cbk192!,
    email: belingheridamien@gmail.com

      damien@gmail.com
      bobkor3


      username: jerome,
      email: jerome@gdmail.com,
      password:bobkor3,
      roles: ["ROLE_ADMIN"],
      avatar: 123
      
http://ec2-35-153-19-27.compute-1.amazonaws.com/phpmyadmin/
damien
729Cbk192!
*/


/*   ========   REQUETE AJAX    ======== */
/*
      fetch(`http://${authenticationURI}login_check`, {
        method: 'post',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log('response', response.data);
          // j'ai le pseudo fourni par l'api
          // mon intention : ranger ce pseudo dans le state
          // je vais dispatcher une action
          const actionToSavePseudo = changeValue('pseudo', response.data);
          store.dispatch(actionToSavePseudo);
        })
        .catch((error) => {
          console.error(error);
        });
*/
      /*   ========   FIN REQUETE AJAX    ========  */

      next(action);
      break;
    }
    case CHECK: {
      console.log(action);
      if (localStorage.tokenOTroquet) {
        const user = jwt(localStorage.tokenOTroquet); // decode your token here
        store.dispatch(authSuccess(localStorage.tokenOTroquet, user));
      }
      break;
    }
    case REGISTER: {
      console.log(action);
      /*   ========      regex       ========  */
      const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/gm;
      const str = state.user.password;

      if (regex.exec(str)) {
        if (state.user.passwordVerify === state.user.password) {
          axios.post(`http://${authenticationURI}register`, {
            username: state.user.username,
            password: state.user.password,
            email: state.user.email,
          },
          { withCredentials: true },
          )
            .then((response) => {
              window.alert(response.data.success);
              // j'ai le pseudo fourni par l'api
              // mon intention : ranger ce pseudo dans le state
              // je vais dispatcher une action
              const actionToSaveRegisterResponse = changeValue('register_response', response.data);
              store.dispatch(actionToSaveRegisterResponse);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        else {
          window.alert('Les mots de passe sont différents')
        }
      }
      else {
        window.alert('Votre mot de passe doit contenir au moins 6 caractères dont une lettre majuscule, une minuscule, un chiffre et un caractère spécial parmi les suivants : @$!%*#?& ')
      }

      break;
    }
    case LOGOUT: {
      localStorage.removeItem('tokenOTroquet');
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default auth;
