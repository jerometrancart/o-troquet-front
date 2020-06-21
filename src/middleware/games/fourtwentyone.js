import { ROLL_DICE, TOGGLE_BLOCK, NEXT_PLAYER, rollDice, toggleBlock, nextPlayer } from 'src/actions/games/fourtwentyone/player';

import axios from 'axios';
import jwt from 'jwt-decode';

// const authenticationURI = 'damien-belingheri.vpnuser.lan:8000/api/login_check';
// http://ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/v1/users
// POST
const authenticationURI = 'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/login_check';
const authenticationURIAdministration = 'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/login';

const controls = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
/*    case LOGIN: {
      const data = {
        username: state.user.username,
        password: state.user.password,
      };
      console.log(data);
*/
/* =========  REQUETE AXIOS   ==============  */

/*      axios.post(`http://${authenticationURI}`, {
        username: state.user.username,
        password: state.user.password,
      })
        .then((response) => {
          console.log('response', response.data);
          const { token } = response.data;
          const user = jwt(token); // decode your token here
          localStorage.setItem('token', token);
          // j'ai le token fourni par l'api
          // mon intention : ranger ce pseudo dans le state
          // je vais dispatcher une action
          const actionToSaveToken = changeValue('token', response.data.token);
          store.dispatch(actionToSaveToken);

          store.dispatch(authSuccess(token, user));
        })
        .catch((error) => {
          console.error(error);
        });

*/
 /* =========    FIN REQUETE AXIOS    ============= */
/*


 {
  headers: {
    'Content-Type': 'application/json',
  },
}
       username : jerome
       password: bobkor3

       username : damien
       password: root

      "username": "jerome",
      "email":"jerome@gdmail.com",
      "password":"bobkor3",
      "roles": ["ROLE_ADMIN"],
      "avatar": 123

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
/*
      next(action);
      break;
    }
*/

/*
    case CHECK: {
      console.log(action);
      if (state.user.isLogged) {
        console.log('user connected');
        store.dispatch(connect());
        next(action);
      }
      break;
    }
    default:
      next(action);
  }
  */
    case ROLL_DICE: {
      console.log(action);
      const toggleClasses = ((die) => {
        die.classList.toggle('odd-roll');
        die.classList.toggle('even-roll');
      });

      const getRandomNumber = ((min, max) => {
        const mini = Math.ceil(min);
        const maxi = Math.floor(max);
        return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
      });

      const dice = [...document.querySelectorAll('.die-list:not(.blocked)')];
      dice.forEach((die) => {
        toggleClasses(die);
        die.dataset.roll = getRandomNumber(1, 6);
      });

      next(action);

      break;
    }
    case TOGGLE_BLOCK: {
      const targetedDie = action.evt.currentTarget;
      console.log(targetedDie);
      targetedDie.classList.toggle('blocked');
      next(action);

      break;
    }

    default:
      next(action);
  }
};

export default controls;
