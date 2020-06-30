import {
  changeValue,
  CHECK,
  LOGOUT,
  GET_FRIENDS,
} from 'src/actions/user';

import axios from 'axios';
// const authenticationURI = 'damien-belingheri.vpnuser.lan:8000/api/';
const authenticationURI = 'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/';
// je veux récupérer l'id de l'user dans le localStorage, le concaténer dans l'URL comme ceci:
//  'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/v1/users/{id}/friends'
// puis faire une requête axios en get à cette nouvelle URL
// et stocker la réponse dans le state, dans la variable 'friends' tant que l'utilisateur est connecté

const userFriends = (store) => (next) => (action) => {
  const state = store.getState();
  const token = localStorage.tokenOTroquet;
  // debugger;
  const friendsURI = `http://${authenticationURI}v1/users/${localStorage.userId}/friends`;

  switch (action.type) {
    case GET_FRIENDS: {
      console.log(token);
      axios.get(friendsURI,
        /* token, */
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        //   { withCredentials: true },
        })
        .then((response) => {
          // debugger
          console.log('my friends : ', response.data.success[0].friends);
          const actionToLoadFriendsList = changeValue('friends', response.data.success[0].friends);
          store.dispatch(actionToLoadFriendsList);
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

export default userFriends;
