import { connect } from 'react-redux';
import GraphViewer from './GraphViewer';

const mapStateToProps = (state) => ({
  graph: state.graph,
  options: state.options,
});

export default connect(
  mapStateToProps,
  null,
)(GraphViewer);
