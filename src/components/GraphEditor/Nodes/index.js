import { connect } from 'react-redux';
import NodesEditor from './NodesEditor';
import { updateNodes } from '../../../redux/graph.actions';

const mapStateToProps = (state) => ({
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
