import { LOGIN, LOGOUT } from '../actions';

export const initialState = {
  isLogged: false,
  route: '/',
};

const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
        route: '/gameselect',
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default login;
