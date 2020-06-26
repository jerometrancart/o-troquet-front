import { createStore, combineReducers } from 'redux';
import login from './login';
import user from './user';
import fourtwentyoneControls from './games/fourtwentyone/controls';
import friends from './friends';

export default combineReducers({
  // login,
  user,
  fourtwentyoneControls,
  // friends,
});
