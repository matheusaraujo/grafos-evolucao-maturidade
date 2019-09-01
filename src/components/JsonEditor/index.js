import { connect } from 'react-redux';
import JsonEditor from './JsonEditor';
import { toggleCode, updateGraph } from '../../actions';

const mapStateToProps = (state) => ({
  showCode: state.page.showCode,
  graph: state.graph,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCode: () => { dispatch(toggleCode()); },
  updateGraph: (graph) => { dispatch(updateGraph(graph)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JsonEditor);
