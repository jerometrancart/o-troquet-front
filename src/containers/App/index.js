import { connect } from 'react-redux';

import App from 'src/components/App';
import { authSuccess } from 'src/actions/user';
import { check } from 'src/actions/user';
import { webSocketDisconnect } from 'src/actions/chatrooms/fourtwentyone';

const mapStateToProps = (state) => {
  return {
    isLogged: state.user.isLogged,
    isAdmin: state.user.isAdmin,
    path: state.user.path,
  };
};

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(check());
  },
  webSocketDisconnect: () => {
    dispatch(webSocketDisconnect());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
