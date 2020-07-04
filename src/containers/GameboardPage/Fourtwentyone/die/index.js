import { connect } from 'react-redux';

import Die from 'src/components/GameboardPage/Fourtwentyone/die';
import { toggleBlock } from 'src/actions/games/fourtwentyone/player'

const mapStateToProps = (state, ownProps) => ({
  blocked: state.fourtwentyoneControls.room[ownProps.dieId].blocked,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleBlock: (evt) => {
    dispatch(toggleBlock(evt));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Die);
