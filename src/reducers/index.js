import { createStore, combineReducers } from 'redux';
import { reducer as BurgerMenu } from 'redux-burger-menu';
import login from './login';
import user from './user';

export default combineReducers({
  // login,
  user,
});


/* const reducers = {
  // Your other reducers go here
  BurgerMenu // Must be mounted at 'burgerMenu'
};

const store = createStore(reducer);
*/
