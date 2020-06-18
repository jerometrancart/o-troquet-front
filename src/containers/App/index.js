import { connect } from 'react-redux';

import App from 'src/components/App';
import { check } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
  isAdmin: state.isAdmin,
  path: state.path,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(check());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
