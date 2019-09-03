import { connect } from 'react-redux';
import GraphEditor from './GraphEditor';
import { updateGraph, updateOptions } from '../../actions';

const mapStateToProps = (state) => ({
  lang: state.page.lang,
  graph: state.graph,
  options: state.options,
});

const mapDispatchToProps = (dispatch) => ({
  updateGraph: (graph) => { dispatch(updateGraph(graph)); },
  updateOptions: (options) => { dispatch(updateOptions(options)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphEditor);
