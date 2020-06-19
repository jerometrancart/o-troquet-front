import { LOGIN, authSuccess } from 'src/actions/user';
import axios from 'axios';
import jwt from 'jwt-decode';

const authenticationURI = 'damien-belingheri.vpnuser.lan:8000/api/';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const data = {
        username: state.user.username,
        password: state.user.password,
      };
      console.log(data);
/*       axios.post(`http://${authenticationURI}login_check`, {headers: {'Content-Type': 'application/json'}},
        {
          username: state.user.username,
          password: state.user.password,
        }) */

/* =========  REQUETE AXIOS   ==============  */

      axios.post(`http://${authenticationURI}login_check`, {
        username: state.user.username,
        password: state.user.password,
      })
        .then((response) => {
          console.log('response', response.data);
          const { token } = response.data;
          const user = jwt(token); // decode your token here
          localStorage.setItem('token', token);
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
*/



/*       axios.post(`http://${authenticationURI}login_check`, data, {
        headers: { 'Content-Type': 'application/json' },
      })
       username : Sdarlz
       password: 729Cbk192!

       username : jerome
       password: bobkor3

       username : damien
       password: bobkor3

        .then((response) => {
          console.log('response', response.data);
          // j'ai le pseudo fourni par l'api
          // mon intention : ranger ce pseudo dans le state
          // je vais dispatcher une action
          // const actionToSavePseudo = change('pseudo', response.data);
          // store.dispatch(actionToSavePseudo);
        })
        .catch((error) => {
          console.error(error);
        });

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

 let fetchOptions = {
            // --- Toujours défini :

            // La méthode HTTP (GET, POST, etc.)
            "method": "POST",
            // --- Bonus (exemples) :

            // On utilisera souvent Cross Origin Resource Sharing qui apporte
            // une sécurité pour les requêtes HTTP effectuée avec XHR entre 2
            // domaines différents.

            "mode": "cors",
            // Veut-on que la réponse puisse être mise en cache par le navigateur ?
            // Non durant le développement, oui en production.
            "cache": "no-cache",

            // Si on veut envoyer des données avec la requête => décommenter et remplacer data par le tableau de données
            body : JSON.stringify(data)
        };

        let baseUrl = `http://${authenticationURI}login_check`;
        let apiKey = "$2a$10$.SF7gPWGrZ3/SYqv3eTSOebxfmw3.MYiagkqcOlvpWZ1mzXgxjfT.";
        


        let request = fetch(baseUrl + "characters/5a109af13dc2080021cd877a?key=", fetchOptions);

        request.then(
                function (response) {
                    console.log(response);
                    return response.json();
                }
            )
            .then(
                function (jsonResponse) {
                    console.log(jsonResponse);
                    console.log(jsonResponse.name);
                }
            );





*/
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default auth;

/*
case LOGIN: {
  const state = store.getState();
  // ex d'assignation par décomposition sur plusieurs niveaux
  // const {
  //   user: {
  //     email,
  //     password,
  //   },
  // } = store.getState();
  // axios
  axios.post('http://localhost:3001/login', {
    // ex d'assignation par décomposition sur plusieurs niveaux
    // email,
    // password,
    email: state.user.email,
    password: state.user.password,
  }, {
    // on peut passer un objet de configuration à axios
    // ici on passe la config withCredentials à true pour autoriser l'échange de cookie avec l'api
    withCredentials: true,
  })
    .then((response) => {
      console.log(response);
      store.dispatch(connect());
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      // je veux dire que le chargement est fini
      store.dispatch(finishLoading());
    });
  // je laisse passer l'action pour qu'elle aille tout de suite dans le reducer passer un état de chargement à true
  next(action);
  break;
}
*/
