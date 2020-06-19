import { connect } from 'react-redux';

import GamesListPage from 'src/components/GamesListPage';

// Action Creators
import { login, logout } from '../../actions';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamesListPage);
