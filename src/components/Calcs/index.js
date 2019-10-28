import { connect } from 'react-redux';
import Calcs from './Calcs';

const mapStateToProps = (state) => ({
  nexts: state.nexts,
});

export default connect(
  mapStateToProps,
  null,
)(Calcs);
