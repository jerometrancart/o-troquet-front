import { LOGIN, LOGOUT } from 'src/actions/user';

export const initialState = {
  isLogged: false,
  path: '/',
};

const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
        path: '/gameselect',
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        path: '/',
      };
    default:
      return state;
  }
};

export default login;
