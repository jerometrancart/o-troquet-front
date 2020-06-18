import { createStore, combineReducers } from 'redux';
import { reducer as BurgerMenu } from 'redux-burger-menu';
import login from './login';

export default combineReducers({
  login,
});


/* const reducers = {
  // Your other reducers go here
  BurgerMenu // Must be mounted at 'burgerMenu'
};

const store = createStore(reducer);
*/
