import {
  changeValue,
  READ,
  read,
  UPDATE_USER,
  login,
  getFriends,
} from 'src/actions/user';

import axios from 'axios';


const authenticationURI = 'damien-belingheri.vpnuser.lan:8000/api/';
// const authenticationURI = 'ec2-100-26-57-91.compute-1.amazonaws.com/O-troquet-Back/public/api/';
// je veux récupérer l'id de l'user dans le localStorage, le concaténer dans l'URL comme ceci:
//  'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/v1/users/{id}/friends'
// puis faire une requête axios en get à cette nouvelle URL
// et stocker la réponse dans le state, dans la variable 'friends' tant que l'utilisateur est connecté


// nouvelle adresse du back 01/07/20 http://ec2-100-26-57-91.compute-1.amazonaws.com/
// format de la réponse :
/* {
  "status": 200,
  "success": [
    {
      "id": 161,
      "email": "jeeeerorrrrrmerre@gddmailrr.com",
      "username": "jerrrrrerrreerreeeodme",
      "avatar": "y8nANTofm9g9.jpg",
      "roles": [
        "ROLE_ADMIN",
        "ROLE_USER"
      ],
      "is_active": true,
      "created_at": [],
      "friends": [


        {
          "isAccepted": true,
          "isAnswered": true,
          "friendDetails": {
            "id": 70,
            "username": "user9"
          }
        },
        {
          "isAccepted": true,
          "isAnswered": true,
          "friendDetails": {
            "id": 63,
            "username": "user2"
          }
        }
      ],
      "achievements": []
    }
  ]
} */

const userProfile = (store) => (next) => (action) => {
  // State
  const state = store.getState();
  // Token
  const token = localStorage.tokenOTroquet;
  // debugger;
  const userURI = `http://${authenticationURI}v1/users/${localStorage.userId}`;
  const avatarURI = 'http://ec2-100-26-57-91.compute-1.amazonaws.com/O-troquet-Back/public/uploads/avatars/';
  // Switch
  switch (action.type) {
    // Action
    case READ: {
      // Axios request
      axios.get(userURI,
        /* token, */
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // withCredentials: true,
          },
        })
        // Answer + Callback
        .then((response) => {
          // debugger
          const actionToLoadUsername = changeValue('username', response.data.success[0].username);
          store.dispatch(actionToLoadUsername);
          const actionToLoadEmail = changeValue('email', response.data.success[0].email);
          store.dispatch(actionToLoadEmail);
          const avatar = response.data.success[0].avatar;
          const actionToLoadAvatar = changeValue('avatar', `${avatarURI}${avatar}`);
          store.dispatch(actionToLoadAvatar);
          console.log(state.user.avatar);
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    // les champs new-password et verify-password sont facultatifs
    // si la valeur du champ new-password est remplie, il doit contenir au moins
    // 1 maj, 1 min, 1 chiffre et 1 caractère spécial
    // la valeur de new-password doit toujours être égale à la valeur du champ verify-password CHECK
    // le back attend un username, un email, un password dans une première requête CHECK
    // nous voulons lui envoyer : la valeur du champ username, la valeur du champ email CHECK
    // SI LE MDP N'EST PAS MODIFIE : la valeur du champ password CHECK
    // UNIQUEMENT SI LE MDP A ETE MODIFIE : la valeur du champ new-password CHECK

    /* regex du register :
    if (regex.exec(str)) {
      if (state.user.passwordVerify === state.user.password) {
        axios.post(`http://${authenticationURI}register`, {
          username: state.user.username,
          password: state.user.password,
          email: state.user.email,
        },
        { withCredentials: true },
        ) */
    case UPDATE_USER: {
      // si le champ newPassword est vide
      if (state.user.newPassword === '') {
        axios.post(`http://${authenticationURI}v1/users/${localStorage.userId}/update`, {
          username: state.user.username,
          // la requête est envoyée avec la valeur du champ password
          password: state.user.password,
          email: state.user.email,
        },
        {
          headers: {
            // récupération du token défini avant le switch
            Authorization: `Bearer ${token}`,
            // withCredentials: true,
          },
        },
        )
          .then((response) => {
            // la réponse contient une phrase 'La modification a bien été prise en compte'
            // rangée dans response.data.success
            window.alert(response.data.success);
            // A ce stade, le token fourni au login n'est plus valide (car il correspond aux infos
            // de l'utilisateur), il faut donc le supprimer
            localStorage.removeItem('tokenOTroquet');
            // et en redemander un nouveau, ce qui ne pose pas de problème puisque dans ce if, les
            // champ suivis sont username, password et email, on peut donc relancer login
            store.dispatch(login());
            // si tout s'est bien passé, on renvoie une requête pour tout afficher en front
            // le code ci-dessous sert à configurer une alerte semantic-ui plus tard
            // const actionToSaveUpdateResponse = changeValue('register_response', response.data);
            // store.dispatch(actionToSaveUpdateResponse);
            // appel à la fonction alert show qui configure le composant semantic enrichi de
            // show true, variant: danger et du message d'alerte contenu dans la requête
            // store.dispatch(alertShow('visible', 'green', response.data.success));
          })
          .catch((error) => {
            console.error(error);
            window.alert('La modification a échoué, merci de vérifier vos identifiants.');
            // store.dispatch(alertShow('visible', 'red', state.user.errorList[2]
          });
      } else {
      // Je récupère la regex du middleware auth.js, case REGISTER
      // Son rôle est de vérifier si j'ai 1 Maj, 1 min, 1chiffre et carac spé
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm;
        // regex du back
        // " /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i"
        // j'applique la regex au nouveau mdp
        const str = state.user.newPassword;
        if (regex.exec(str)) {
        // si le nouveau mot de passe ne passe pas la regex, inutile de continuer,
        // on passe au else tout en bas
        // si le champ nouveau mdp n'est pas vide mais que les nouveaux mdp ne correspondent pas
          if (state.user.newPasswordVerify !== state.user.newPassword) {
          // appel à la fonction alert show qui configure le composant bootstrap enrichi de show
          // true, variant: danger et du message d'alerte sous forme de string
          // store.dispatch(alertShow('visible', 'red', state.user.errorList[0]));
            window.alert('Les mots de passe sont différents');
          } else {
          // si le champ nouveau mdp n'est pas vide et que les nouveaux mdp correspondent
            axios.post(`http://${authenticationURI}v1/users/${localStorage.userId}/update`, {
              username: state.user.username,
              // la requête est envoyée cette fois avec la valeur du champ newPassword
              password: state.user.newPassword,
              email: state.user.email,
            },
            {
              headers: {
                // récupération du token défini avant le switch
                Authorization: `Bearer ${token}`,
                // withCredentials: true,
              },
            },
            )
              .then((response) => {
              // la réponse contient une phrase 'La modification a bien été prise en compte'
              // rangée dans response.data.success
                window.alert(response.data.success);
                // A ce stade, le token fourni au login n'est plus valide (car il correspond aux infos
                // de l'utilisateur), il faut donc le supprimer
                localStorage.removeItem('tokenOTroquet');
                // et en redemander un nouveau, ce qui POSE PROBLEME puisque dans ce if, les
                // champ suivis sont username, newPassword et email, on peut ne peut pas relancer login
                // il faut d'abord attribuer au password du reducer la valeur de newPassword
                const { newPassword } = state.user.newPassword;
                const actionToSaveNewPassword = changeValue('password', newPassword);
                store.dispatch(actionToSaveNewPassword);
                store.dispatch(login());

              // le code ci-dessous sert à configurer une alerte semantic-ui plus tard
              // const actionToSaveUpdateResponse = changeValue('register_response', response.data);
              // store.dispatch(actionToSaveUpdateResponse);
              // appel à la fonction alert show qui configure le composant semantic enrichi de
              // show true, variant: danger et du message d'alerte contenu dans la requête
              // store.dispatch(alertShow('visible', 'green', response.data.success));
              })
              .catch((error) => {
                console.error(error);
                window.alert('La modification a échoué, merci de vérifier vos identifiants.');
                // store.dispatch(alertShow('visible', 'red', state.user.errorList[2]
              });
          }
        } else {
          // store.dispatch(alertShow('visible', 'red', state.user.errorList[1]));
          window.alert('Votre nouveau mot de passe doit contenir au moins 6 caractères dont une lettre majuscule, une minuscule, un chiffre et un caractère spécial parmi les suivants : @$!%*#?& ')
        }
      }
      break;
    }
    default:
      next(action);
  }
};

export default userProfile;
