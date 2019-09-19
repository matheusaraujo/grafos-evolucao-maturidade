import { connect } from 'react-redux';
import NodesEditor from './NodesEditor';
import { updateNodes } from '../../../actions/graph';

const mapStateToProps = (state) => ({
  pageMode: state.page.mode,
  lang: state.page.lang,
  nodes: state.graph.nodes,
});

const mapDispatchToProps = (dispatch) => ({
  updateNodes: (nodes) => { dispatch(updateNodes(nodes)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NodesEditor);
