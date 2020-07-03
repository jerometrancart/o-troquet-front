import { LOGIN,
  changeValue,
  authSuccess,
  CHECK,
  connect,
  REGISTER,
  alertShow,
  LOGOUT,
  getFriends,
  AUTH_SUCCESS,
} from 'src/actions/user';
import { webSocketDisconnect, webSocketListenRoom, webSocketConnect, checkRoom } from 'src/actions/chatrooms/fourtwentyone';
import { authenticationURI, authenticationURIAdministration } from 'src/selectors';

import axios from 'axios';
import jwt from 'jwt-decode';

// const authenticationURI = 'damien-belingheri.vpnuser.lan:8000/api/';
// http://ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/v1/users
// POST
// const authenticationURI = 'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/';
// const authenticationURI = 'ec2-100-26-57-91.compute-1.amazonaws.com/O-troquet-Back/public/api/';

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
      { withCredentials: true })
        .then((response) => {
          // debugger
          // console.log(response);
          // on ne garde pas le mot de passe de l'utilisateur en dans le state !
          const actionToDeletePassword = changeValue('password', '');
          store.dispatch(actionToDeletePassword);
          if (response.data.token) {
            // console.log(response.data.token);
            // console.log(response.data.metadata.user_id);
            // const token = ;
            const user = jwt(response.data.token); // decode your token here
            localStorage.setItem('tokenOTroquet', response.data.token);
            localStorage.setItem('userId', response.data.metadata.user_id);
            // j'ai le token fourni par l'api
            // mon intention : ranger ce pseudo dans le state
            // je vais dispatcher une action
            // const actionToSaveToken = changeValue('tokenOTroquet', response.data.token);
            const actionToSavePseudo = changeValue('pseudo', response.data.username);
            store.dispatch(actionToSavePseudo);
            const actionToSaveUserId = changeValue('userId', response.data.metadata.user_id);
            store.dispatch(actionToSaveUserId);
            const actionToSaveToken = changeValue('tokenOTroquet', response.data.token);
            store.dispatch(actionToSaveToken);
            store.dispatch(authSuccess(response.data.token, user));
            store.dispatch(getFriends());
          }
          else {
            if (response.data.metadata.banned === true) {
              // afficher une phrase pour dire que l'utilisateur est banni
              store.dispatch(alertShow('visible', 'red', state.user.errorList[3]));
            }
            if (response.data.metadata.active === false) {
              store.dispatch(alertShow('visible', 'red', state.user.errorList[4]));
            }
            console.log(response.data.metadata.banned);
            // store.dispatch(alertShow('visible', 'red', errorResponse));
          }
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(alertShow('visible', 'red', state.user.errorList[2]));
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

      next(action);
      break;
    }
    case CHECK: {
      console.log(action);
      if (localStorage.tokenOTroquet) {
        const user = jwt(localStorage.tokenOTroquet); // decode your token here
        /* const { userId } = localStorage.userId;
        const actionToGetId = changeValue('userId', userId);
        store.dispatch(actionToGetId); */
        store.dispatch(authSuccess(localStorage.tokenOTroquet, user));
        store.dispatch(getFriends());
        store.dispatch(webSocketConnect());
      }
      else {
        // window.location = ('http://localhost:8080')
        next(action);
      }
      break;
    }
    case AUTH_SUCCESS: {
      // console.log('CHECK a trouvé un token et dispatché authSuccess dans le store ', action);
      // authSuccess doit vérifier si oui ou non nous avons une room en url
      const roomId = window.location.pathname.slice(25);
      if (roomId !== '') {
        // il y a des caractères à la fin de l'url, nous allons vérifier qu'ils constituent une room valide
        // store.dispatch(changeValue('roomId', roomId));
        // const socket = store.dispatch(webSocketConnect());
        store.dispatch(webSocketConnect(roomId));
        // console.log(socket);
        // const socket = window.io('http://localhost:3001');
        // next(action);
      }
      // )
      next(action);
    } break;
    case REGISTER: {
      console.log(action);
      /*   ========      regex       ========  */
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm;
      // regex du back
      // " /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i"
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
              // window.alert(response.data.success);
              // j'ai le pseudo fourni par l'api
              // mon intention : ranger ce pseudo dans le state
              // je vais dispatcher une action
              const actionToSaveRegisterResponse = changeValue('register_response', response.data);
              store.dispatch(actionToSaveRegisterResponse);
              // appel à la fonction alert show qui configure le composant bootstrap enrichi de
              // show true, variant: danger et du message d'alerte contenu dans la requête
              store.dispatch(alertShow('visible', 'green', response.data.success));
            })
            .catch((error) => {
              console.error(error);
            });
        }
        else {
          // appel à la fonction alert show qui configure le composant bootstrap enrichi de show
          // true, variant: danger et du message d'alerte sous forme de string
          store.dispatch(alertShow('visible', 'red', state.user.errorList[0]));
          // window.alert('Les mots de passe sont différents')
        }
      }
      else {
        store.dispatch(alertShow('visible', 'red', state.user.errorList[1]));
        // window.alert('Votre mot de passe doit contenir au moins 6 caractères dont une lettre maj,
        // une minuscule, un chiffre et un caractère spécial parmi les suivants : @$!%*#?& ')
      }

      break;
    }
    case LOGOUT: {
      localStorage.removeItem('tokenOTroquet');
      console.log('middleware auth je veux me déconnecter');
      store.dispatch(webSocketDisconnect());

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default auth;
