import { connect } from 'react-redux';

import App from 'src/components/App';
import { authSuccess } from 'src/actions/user';
import { check } from 'src/actions/user';

const mapStateToProps = (state) => {
  return {
    isLogged: state.user.isLogged,
    isAdmin: state.user.isAdmin,
    path: state.user.path,
  };
};

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(check());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
