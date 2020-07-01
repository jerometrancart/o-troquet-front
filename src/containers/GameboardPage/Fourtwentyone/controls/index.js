import { connect } from 'react-redux';
import { rollDice, startGame } from 'src/actions/games/fourtwentyone/player';

import controls from 'src/components/GameboardPage/Fourtwentyone/controls';

const mapStateToProps = (state) => ({
  players: state.fourtwentyoneControls.players,
});

const mapDispatchToProps = (dispatch) => ({
  rollDice: () => {
    dispatch(rollDice());
  },
  startGame: () => {
    dispatch(startGame());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(controls);
