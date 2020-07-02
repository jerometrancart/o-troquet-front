import {
  changeValue,
  READ,
} from 'src/actions/user';

import axios from 'axios';


// const authenticationURI = 'damien-belingheri.vpnuser.lan:8000/api/';
const authenticationURI = 'ec2-100-26-57-91.compute-1.amazonaws.com/O-troquet-Back/public/api/';
// je veux récupérer l'id de l'user dans le localStorage, le concaténer dans l'URL comme ceci:
//  'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/v1/users/{id}/friends'
// puis faire une requête axios en get à cette nouvelle URL
// et stocker la réponse dans le state, dans la variable 'friends' tant que l'utilisateur est connecté


// nouvelle adresse du back 01/07/20 http://ec2-100-26-57-91.compute-1.amazonaws.com/
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
  // Switch
  switch (action.type) {
    //Action
    case READ: {
      console.log(token);
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
          //debugger
          console.log(response.data.success[0].Profileusername);
          const actionToLoadUsername = changeValue('profileUsername', response.data.success.ProfileUsername);
          store.dispatch(actionToLoadUsername);
          const actionToLoadEmail = changeValue('profileEmail', response.data.success.ProfileEmail);
          store.dispatch(actionToLoadEmail);
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default userProfile;
