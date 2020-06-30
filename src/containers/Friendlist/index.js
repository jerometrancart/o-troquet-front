import { connect } from 'react-redux';

import Friendlist from 'src/components/Friendlist';

const mapStateToProps = (state) => ({
  friends: state.user.friends,
  //  friendDetails: state.user.friends.friendDetails,
  curUsername: state.user.userToken.username,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Friendlist);
