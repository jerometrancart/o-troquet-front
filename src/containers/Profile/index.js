import { connect } from 'react-redux';
import { toggleOpen, toggleClose } from 'src/actions/user';
import Profile from 'src/components/Profile';

const mapStateToProps = (state) => ({
  profileUsername: state.user.profileUsername,
  profileEmail: state.user.profileEmail,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
