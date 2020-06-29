import { connect } from 'react-redux';

import Message from 'src/components/GameboardPage/Fourtwentyone/Message';
import { isAuthor } from 'src/selectors';

const mapStateToProps = (state, ownProps) => ({
  isAuthor: isAuthor(state.user.userToken.username, ownProps.author),
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);

