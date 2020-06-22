import { connect } from 'react-redux';

import Signin from 'src/components/Signin';

import { register } from 'src/actions/user';

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
  register: () => {
    dispatch(register());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
