// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from '../reducers';
import auth from '../middleware/auth';
import userFriends from '../middleware/userFriends';
import userProfile from '../middleware/userProfile';
import fourtwentyoneControls from '../middleware/games/fourtwentyone';
import fourtwentyoneChat from '../middleware/chatrooms/fourtwentyone';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    auth,
    userFriends,
    userProfile,
    fourtwentyoneControls,
    fourtwentyoneChat,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
