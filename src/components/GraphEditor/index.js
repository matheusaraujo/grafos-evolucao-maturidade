import { connect } from 'react-redux';
import GraphEditor from './GraphEditor';
import { updateGraph } from '../../actions';

const mapStateToProps = (state) => ({
  lang: state.page.lang,
  graph: state.graph,
});

const mapDispatchToProps = (dispatch) => ({
  updateGraph: (graph) => { dispatch(updateGraph(graph)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphEditor);
