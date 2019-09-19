import { connect } from 'react-redux';
import GraphEditor from './GraphEditor';
import {
  editNodes, editNodesGroups, editEdges, editOptions,
} from '../../actions/page';

const mapStateToProps = (state) => ({
  pageMode: state.page.mode,
  lang: state.page.lang,
});

const mapDispatchToProps = (dispatch) => ({
  editNodes: () => { dispatch(editNodes()); },
  editNodesGroups: () => { dispatch(editNodesGroups()); },
  editEdges: () => { dispatch(editEdges()); },
  editOptions: () => { dispatch(editOptions()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphEditor);
