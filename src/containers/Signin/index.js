import { connect } from 'react-redux';

import Signin from 'src/components/Signin';

import { register, alertShow } from 'src/actions/user';

const mapStateToProps = (state) => ({
  show: state.user.show,
  variant: state.user.variant,
  textAlert: state.user.textAlert,
});
const mapDispatchToProps = (dispatch) => ({
  register: () => {
    dispatch(register());
  },
  alertShow: (show, variant, textAlert) => {
    dispatch(alertShow(show, variant, textAlert));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
