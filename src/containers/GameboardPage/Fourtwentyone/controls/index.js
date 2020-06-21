import { connect } from 'react-redux';
import { rollDice, blockDie } from 'src/actions/games/fourtwentyone/player';

import controls from 'src/components/GameboardPage/Fourtwentyone/controls';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

  rollDice: () => {
    dispatch(rollDice());
  },
  blockDie: () => {
    dispatch(blockDie());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(controls);
