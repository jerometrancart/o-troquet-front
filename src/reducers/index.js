import { createStore, combineReducers } from 'redux';
import login from './login';
import user from './user';
import fourtwentyoneControls from './games/fourtwentyone/controls.js';

import fourtwentyoneChats from './chats/fourtwentyone';

import friends from './friends';


export default combineReducers({
  // login,
  user,
  fourtwentyoneControls,
  fourtwentyoneChats,
  // friends,
});
