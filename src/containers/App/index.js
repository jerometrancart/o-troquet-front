import { connect } from 'react-redux';

import App from 'src/components/App';
import { authSuccess } from 'src/actions/user';
import { check } from 'src/actions/user';
import { webSocketDisconnect, webSocketConnect } from 'src/actions/chatrooms/fourtwentyone';

const mapStateToProps = (state) => {
  return {
    isLogged: state.user.isLogged,
    isAdmin: state.user.isAdmin,
    path: state.user.path,
    roomId: state.fourtwentyoneChats.roomId,
    room: state.fourtwentyoneControls.room,
    loadingUser: state.user.loadingUser,
    loadingRoom: state.fourtwentyoneControls.loadingRoom,
    // hasError: state.user.hasError,
    roomHasError: state.fourtwentyoneChats.roomHasError,
  };
};

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(check());
  },
  webSocketDisconnect: () => {
    dispatch(webSocketDisconnect());
  },
  webSocketConnect: () => {
    dispatch(webSocketConnect());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
