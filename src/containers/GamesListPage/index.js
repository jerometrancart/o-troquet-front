import { connect } from 'react-redux';

import GamesListPage from 'src/components/GamesListPage';

// Action Creators
import { login, logout } from '../../actions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.userToken.username,
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamesListPage);
