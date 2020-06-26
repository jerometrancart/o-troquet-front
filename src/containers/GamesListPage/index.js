import { connect } from 'react-redux';

import GamesListPage from 'src/components/GamesListPage';

// Action Creators
import { webSocketConnect, webSocketDisconnect, webSocketGetRoom, webSocketCreateRoom, webSocketJoinRoom } from 'src/actions/chatrooms/fourtwentyone';
import { login, logout } from '../../actions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.userToken.username,
  roomId: state.user.roomId,
});
const mapDispatchToProps = (dispatch) => ({
  webSocketConnect: () => {
    dispatch(webSocketConnect());
  },
  webSocketDisconnect: () => {
    dispatch(webSocketDisconnect());
  },
  webSocketGetRoom: () => {
    dispatch(webSocketGetRoom());
  },
  webSocketCreateRoom: () => {
    dispatch(webSocketCreateRoom());
  },
  webSocketJoinRoom: (roomId) => {
    dispatch(webSocketJoinRoom(roomId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamesListPage);
