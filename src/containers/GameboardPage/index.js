import { connect } from 'react-redux';

import GameboardPage from 'src/components/GameboardPage';

// Action Creators
import { login, logout } from '../../actions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameboardPage);
