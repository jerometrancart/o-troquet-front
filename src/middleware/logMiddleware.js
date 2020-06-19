import { CHECK, connect } from 'src/actions/user';

const logMiddleware = (store) => (next) => (action) => {
  console.log(store.getState());
  const state = store.getState();
  switch (action.type) {
    case CHECK:
      if (state.user.isLogged) {
        store.dispatch(connect());
      }
      break;
    default:
      console.log('Je laisse passer cette action: ', action);
      next(action);
  }
};

export default logMiddleware;
