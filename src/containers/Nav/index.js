import { connect } from 'react-redux';

import Nav from 'src/components/Nav';

// import { check } from 'src/actions/user';



const mapStateToProps = (state) => ({
  username: state.user.userToken.username,
  isLogged: state.user.isLogged,
  menuItems: state.user.menuItems,
});
const mapDispatchToProps = (dispatch) => ({
   
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
