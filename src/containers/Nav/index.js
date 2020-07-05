import { connect } from 'react-redux';
import { toggleClose, changeValue } from 'src/actions/user';
import { clickHome } from 'src/actions/chatrooms/fourtwentyone';
import Nav from 'src/components/Nav';

// import { check } from 'src/actions/user';

const mapStateToProps = (state) => ({
  username: state.user.userToken.username,
  isLogged: state.user.isLogged,
  menuItems: state.user.menuItems,
  open: state.user.open,
});

const mapDispatchToProps = (dispatch) => ({
  toggleClose: () => {
    const action = toggleClose();
    dispatch(action);
  },
  changeValue: () => {
    const action = changeValue();
    dispatch(action);
  },
  clickHome: () => {
    const action = clickHome();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
