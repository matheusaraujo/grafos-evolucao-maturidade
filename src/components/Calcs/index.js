import { connect } from 'react-redux';
import Calcs from './Calcs';
import { showNexts } from '../../actions/nexts';

const mapStateToProps = (state) => ({
  graph: state.graph,
  lang: state.page.lang,
  nexts: state.nexts,
});

const mapDispatchToProps = (dispatch) => ({
  showNexts: () => { dispatch(showNexts()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calcs);
