import { connect } from 'react-redux';

import scoreboard from 'src/components/GameboardPage/Fourtwentyone/scoreboard.js';
// import { webSocketConnect } from 'src/actions/chatrooms/fourtwentyone';

const mapStateToProps = (state) => ({
  players: state.fourtwentyoneControls.players,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(scoreboard);
