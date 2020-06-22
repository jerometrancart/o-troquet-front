import { connect } from 'react-redux';
import { rollDice } from 'src/actions/games/fourtwentyone/player';

import controls from 'src/components/GameboardPage/Fourtwentyone/controls';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  rollDice: () => {
    dispatch(rollDice());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(controls);
