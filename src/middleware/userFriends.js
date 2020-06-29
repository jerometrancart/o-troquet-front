import {
  changeValue,
  CHECK,
  LOGOUT,
  GET_FRIENDS,
} from 'src/actions/user';

import axios from 'axios';

const authenticationURI = 'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/';
// je veux récupérer l'id de l'user dans le localStorage, le concaténer dans l'URL comme ceci:
//  'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/v1/users/{id}/friends'
// puis faire une requête axios en get à cette nouvelle URL
// et stocker la réponse dans le state, dans la variable 'friends' tant que l'utilisateur est connecté

const userFriends = (store) => (next) => (action) => {
  const state = store.getState();
  const userId = localStorage.getItem(userId);
  const friendsURI = `http://${authenticationURI}/v1/users/${userId}/friends`;

  switch (action.type) {
    case GET_FRIENDS: {
      axios.get(friendsURI, {

      },
      { withCredentials: true })
        .then((response) => {
          console.log(response);
          const actionToLoadFriendsList = changeValue('friends', response.data.friends);
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
