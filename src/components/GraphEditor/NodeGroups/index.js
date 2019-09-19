import { connect } from 'react-redux';
import NodeGroupsEditor from './NodeGroupsEditor';
import { updateNodeGroups } from '../../../actions/index';

const mapStateToProps = (state) => ({
  lang: state.page.lang,
  nodeGroups: state.nodeGroups,
});

const mapDispatchToProps = (dispatch) => ({
  updateNodeGroups: (nodeGroups) => { dispatch(updateNodeGroups(nodeGroups)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NodeGroupsEditor);
