import { connect } from 'react-redux';

import Login from 'src/components/Login';

// Action Creators
import { login, logout } from '../../actions';

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});
const mapDispatchToProps = (dispatch) => ({
  login: () => {
    dispatch(login());
  },
  logout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
