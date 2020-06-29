import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { rollDice } from 'src/actions/games/fourtwentyone/player';

import GameboardPage from 'src/components/GameboardPage/Fourtwentyone';

// Action Creators
import { webSocketConnect, webSocketDisconnect, webSocketListenRoom } from 'src/actions/chatrooms/fourtwentyone';
import { login, logout } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.isLogged,
  roomId: ownProps.match.params.roomId,
});


const mapDispatchToProps = (dispatch) => ({
  rollDice: () => {
    dispatch(rollDice());
  },
  webSocketConnect: () => {
    dispatch(webSocketConnect());
  },
  webSocketDisconnect: () => {
    dispatch(webSocketDisconnect());
  },
  webSocketListenRoom: () => {
    dispatch(webSocketListenRoom());
  },
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameboardPage);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

