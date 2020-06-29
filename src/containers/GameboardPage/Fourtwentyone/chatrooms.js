import { connect } from 'react-redux';

import chatrooms from 'src/components/GameboardPage/Fourtwentyone/chatrooms.js';
import { webSocketConnect } from 'src/actions/chatrooms/fourtwentyone';

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
  webSocketConnect: () => {
    console.log('ici je vais émettre l\'intention de me connecter au websocket');
    dispatch(webSocketConnect());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(chatrooms);
