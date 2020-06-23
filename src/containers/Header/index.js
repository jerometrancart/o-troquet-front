import { connect } from 'react-redux';

import Header from 'src/components/Header';

import { logout } from 'src/actions/user';



const mapStateToProps = (state) => ({
  username: state.user.userToken.username,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
