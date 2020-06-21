import { connect } from 'react-redux';
import { rollDice } from 'src/actions/games/fourtwentyone/player';

import GameboardPage from 'src/components/GameboardPage/Fourtwentyone';

// Action Creators
import { login, logout } from '../../../actions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});
const mapDispatchToProps = (dispatch) => ({
  rollDice: () => {
    dispatch(rollDice());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameboardPage);
