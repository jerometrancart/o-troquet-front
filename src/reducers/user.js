// ici je crée un second reducer qui gère toutes les infos liées au user
import { CHANGE_VALUE, LOGIN, FINISH_LOADING, AUTH_SUCCESS, LOGOUT, CHECK } from 'src/actions/user';
import BLACKJACK from 'src/assets/images/blackjack.png';
import Heart from 'src/assets/images/heart.png';
// import { } from 'src/actions';

export const initialState = {
  username: '',
  password: '',
  isLogged: false,
  isAdmin: false,
  loading: false,
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
    },
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
  }
};
export default reducer;
