import { connect } from 'react-redux';
import { toggleOpen, toggleClose, update } from 'src/actions/user';
import Profile from 'src/components/Profile';

const mapStateToProps = (state) => ({
  username: state.user.username,
  email: state.user.email,
  open: state.user.open,
  /* avatar: state.user.avatar, */
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => {
    const action = toggleOpen();
    dispatch(action);
  },
  toggleClose: () => {
    const action = toggleClose();
    dispatch(action);
  },
  update: () => {
    const action = update();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
