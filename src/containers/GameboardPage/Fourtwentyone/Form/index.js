import { connect } from 'react-redux';

import Form from 'src/components/GameboardPage/Fourtwentyone/Form';
import { sendMessage, setMessage } from 'src/actions/chatrooms/fourtwentyone';

const mapStateToProps = (state) => ({
  inputValue: state.fourtwentyoneChats.text,
});
const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    // construction de l'objet action
    const action = sendMessage();
    // console.log('je veux envoyer un message');
    // émission de l'action
    dispatch(action);
    // alternative sur une seule ligne :
    // dispatch(sendMessage());
  },
  setMessage: (value) => {
    console.log('Dans setMessage, je dispatch mon action', value);
    dispatch(setMessage(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

