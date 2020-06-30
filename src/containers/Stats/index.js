import { connect } from 'react-redux';

import Stats from 'src/components/Stats';

const mapStateToProps = (state) => ({
  achievements: state.user.achievements,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
