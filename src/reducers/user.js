// ici je crée un second reducer qui gère toutes les infos liées au user

import { CHANGE_VALUE, LOGIN, FINISH_LOADING, AUTH_SUCCESS, LOGOUT, CHECK, ALERT_SHOW} from "src/actions/user";
import Friendlist from "../components/Friendlist";


// import { } from 'src/actions';

export const initialState = {
  username: '',
  password: '',
  isLogged: false,
  isAdmin: false,
  loading: false,
  path: '/',
  userToken: '',
  
  menuItems: [
    {
      id: 1,
      title: 'Profil',
    },
    {
      id: 2,
      title: 'Statistiques / Récompenses',
    },
    {
      id: 3,
      title: 'Retour au bar',
    },
  ],
  friends: [
    {
      isAccepted: false,
      isAnswered: true,
      friendDetails: {
        id: 1,
        username: 'Damien',
      },
    },
    {
      isAccepted: true,
      isAnswered: true,
      friendDetails: {
        id: 2,
        username: 'Jerome',
      },
    },
    {
      isAccepted: true,
      isAnswered: true,
      friendDetails: {
        id: 3,
        username: 'Thomas',
      },
    },
    {
      isAccepted: false,
      isAnswered: false,
      friendDetails: {
        id: 4,
        username: 'Clément',
      },
    },
    {
      isAccepted: false,
      isAnswered: true,
      friendDetails: {
        id: 5,
        username: 'Florian',
      },
    },

  show: 'hidden',
  variant: 'red',
  textAlert: '',
  errorList: [
    'Les mots de passe sont différents',
    'Votre mot de passe doit contenir au moins 6 caractères dont une lettre majuscule, une minuscule, un chiffre et un caractère spécial parmi les suivants : @$!%*#?& ',
    'Vos identifiants sont incorrects',
    'Votre compte utilisateur a été banni suite à un comportement inapproprié, vous ne pouvez plus vous connecter à compte',
    'Votre compte n\'est pas encore actif, merci de vérifier vos e-mails',

  ],
};


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN:
      console.log(action);
      return {
        ...state,
        loading: true,

      };
    case FINISH_LOADING: state.user
      return {
        ...state,
        loading: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLogged: true,
        userToken: action.user,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        isAdmin: false,
        username: '',
        password: '',
        userToken: '',
        tokenOTroquet: '',
      };
    case CHECK:
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
    case ALERT_SHOW:
      return {
        ...state,
        show: action.show,
        variant: action.variant,
        textAlert: action.textAlert,
      };
  }
};
export default reducer;
