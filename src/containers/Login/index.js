import { connect } from 'react-redux';

import Login from 'src/components/Login';

// Action Creators
import { login, logout } from '../../actions/user.js';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});
const mapDispatchToProps = (dispatch) => ({
  login: () => {
    dispatch(login());
  },
  logout: () => {
    dispatch(logout());
  },
});

// connect est une fonction qui prend un composant en entrée
// et qui retourne ce même composant enrichi de prop
// c'est ce qu'on appelle un HOC pour high order component
// connect enrichi le composant en props lié au state
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
