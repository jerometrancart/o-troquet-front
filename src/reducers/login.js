import { LOGIN, LOGOUT, CHANGE_VALUE } from 'src/actions/user';

export const initialState = {
  isLogged: false,
  isAdmin: false,
  path: '/',
  username: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
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
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
