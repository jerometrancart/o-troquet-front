import { connect } from 'react-redux';

import Field from 'src/components/Login/Field';
import { changeValue } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => {
  return ({
    value: state.user[ownProps.name],
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (newValue) => {
    // console.log('je veux changer la valeur du champ');
    const action = changeValue(ownProps.name, newValue);
    // console.log(action);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
