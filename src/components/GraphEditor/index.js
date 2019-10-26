import { connect } from 'react-redux';
import GraphEditor from './GraphEditor';
import {
  editNodes, editNodeGroups, editEdges, editOptions,
} from '../../redux/page.actions';

const mapStateToProps = (state) => ({
  pageMode: state.page.mode,
  lang: state.page.lang,
});

const mapDispatchToProps = (dispatch) => ({
  editNodes: () => { dispatch(editNodes()); },
  editNodeGroups: () => { dispatch(editNodeGroups()); },
  editEdges: () => { dispatch(editEdges()); },
  editOptions: () => { dispatch(editOptions()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphEditor);
