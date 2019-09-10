import { connect } from 'react-redux';
import GraphViewer from './GraphViewer';
import { showDetails, setDetails } from '../../actions/index';

const mapStateToProps = (state) => ({
  graph: state.graph,
  options: state.options,
});

const mapDispatchToProps = (dispatch) => ({
  showDetails: () => { dispatch(showDetails()); },
  setDetails: (content) => { dispatch(setDetails(content)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphViewer);
