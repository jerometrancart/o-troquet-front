import { connect } from 'react-redux';

import scoreboard from 'src/components/GameboardPage/Fourtwentyone/scoreboard.js';
import { updateParty } from 'src/actions/games/fourtwentyone/player';

const mapStateToProps = (state) => ({
  players: state.fourtwentyoneControls.players,
  roomId: state.fourtwentyoneChats.roomId,
});

const mapDispatchToProps = (dispatch) => ({
  updateParty: () => {
    dispatch(updateParty());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(scoreboard);
