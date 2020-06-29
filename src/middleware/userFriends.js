import { 
  changeValue,
  CHECK,
  LOGOUT } from 'src/actions/user';

import axios from 'axios';

const authenticationURI = 'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/';
// je veux récupérer l'id de l'user dans le localStorage, le concaténer dans l'URL comme ceci:
//  'ec2-35-153-19-27.compute-1.amazonaws.com/O-troquet-Back/public/api/v1/users/{id}/friends'
// puis faire une requête axios en get à cette nouvelle URL
// et stocker la réponse dans le state, dans la variable 'friends' tant que l'utilisateur est connecté

const auth = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case
}};

export default userFriends;
