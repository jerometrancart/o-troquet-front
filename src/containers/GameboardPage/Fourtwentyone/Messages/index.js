import { connect } from 'react-redux';

import Messages from 'src/components/GameboardPage/Fourtwentyone/Messages';


const mapStateToProps = (state) => ({
  messages: state.fourtwentyoneChats.messages,
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);
