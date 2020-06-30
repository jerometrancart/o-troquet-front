import { connect } from 'react-redux';

import Profile from 'src/components/Profile';

const mapStateToProps = (state) => ({
  achievements: state.user.profile,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
