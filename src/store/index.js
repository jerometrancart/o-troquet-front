// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from '../reducers';
import logMiddleware from '../middleware/logMiddleware';
import auth from '../middleware/auth';
import fourtwentyoneControls from '../middleware/games/fourtwentyone';
import fourtwentyoneChat from '../middleware/chatrooms/fourtwentyone';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    auth,
    logMiddleware,
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
