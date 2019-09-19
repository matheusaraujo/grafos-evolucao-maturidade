import { connect } from 'react-redux';
import EdgesEditor from './EdgesEditor';
import { updateEdges } from '../../../actions/graph';

const mapStateToProps = (state) => ({
  pageMode: state.page.mode,
  lang: state.page.lang,
  edges: state.graph.edges,
});

const mapDispatchToProps = (dispatch) => ({
  updateEdges: (edges) => { dispatch(updateEdges(edges)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EdgesEditor);
