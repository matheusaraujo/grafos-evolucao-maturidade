import { connect } from 'react-redux';
import JsonEditor from './JsonEditor';
import { updateGraph } from '../../actions';

const mapStateToProps = (state) => ({
  graph: state.graph,
});

const mapDispatchToProps = (dispatch) => ({
  updateGraph: (graph) => { dispatch(updateGraph(graph)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JsonEditor);
