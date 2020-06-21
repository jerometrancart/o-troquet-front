// ici je crée un second reducer qui gère toutes les infos liées au user
import { CHANGE_VALUE, LOGIN, FINISH_LOADING, AUTH_SUCCESS, LOGOUT, CHECK } from "src/actions/user";

// import { } from 'src/actions';

export const initialState = {
  username: '',
  password: '',
  isLogged: false,
  isAdmin: false,
  loading: false,
  path: '/',
  userToken: '',
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
        email: '',
        password: '',
        user: '',
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
