// ici je crée un second reducer qui gère toutes les infos liées au user
// import { CHANGE_VALUE, eLOGIN, FINISH_LOADING, AUTH_SUCCESS, LOGOUT, CHECK } from 'src/actions/user';
import BLACKJACK from 'src/assets/images/blackjack.png';
import Heart from 'src/assets/images/heart.png';

import { CHANGE_VALUE, LOGIN, FINISH_LOADING, AUTH_SUCCESS, LOGOUT, CHECK, ALERT_SHOW, TOGGLE_OPEN, TOGGLE_CLOSE } from 'src/actions/user';
import { CHECK_ROOM } from 'src/actions/chatrooms/fourtwentyone';
import { WEBSOCKET_CONNECT } from "../actions/chatrooms/fourtwentyone";

// import { } from 'src/actions';

export const initialState = {
  open: false,
  username: '',
  password: '',
  newPassword: '',
  email: '',
  avatar: '',
  isLogged: false,
  isAdmin: false,
  loading: true,
  path: '/',
  userToken: '',
  achievements: [
    {
      id: 1,
      phrase: '100 victoires youpi',
      icon: BLACKJACK,
    },
    {
      id: 2,
      phrase: 'ohlala',
      icon: Heart,
    },
    {
      id: 3,
      phrase: 'C\'est la piquette, Jack',
      icon: BLACKJACK,
    }],
  Profile: [
    {
      id: 1,
      username: '',
      password: '',
      avatar: 123,
    },
  ],
  userId: '',
  menuItems: [
    {
      id: 1,
      title: 'Profil',
      url: '/profile',
    },
    {
      id: 2,
      title: 'Statistiques / Récompenses',
      url: '/stats',
    },
    {
      id: 3,
      title: 'Retour au bar',
      url: '/gameselect',
    },
  ],
  friends: [
/*     {
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
    }, */
  ],
  axiosFriends: [],

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
  roomId: '',
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
    case FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLogged: true,
        userToken: action.user,
        loading: false,
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
        userId: '',
      };
    case CHECK:
      console.log(' dans le reducer user, CHECK va mettre state.user.loading à false, on va avoir le contrôle');
      return {
        ...state,
        // loading: true,
        loading: false,
      };
    case ALERT_SHOW:
      return {
        ...state,
        show: action.show,
        variant: action.variant,
        textAlert: action.textAlert,
      };
    case WEBSOCKET_CONNECT:
      return {
        ...state,
        gameId: action.gameId,
      };
    case CHECK_ROOM:
      return {
        ...state,
        roomId: state.fourtwentyoneChats.roomId,
        loading: false,
      };
    case TOGGLE_OPEN:
      console.log(state.open);
      return {
        ...state,
        open: true,
      };
    case TOGGLE_CLOSE:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
export default reducer;
