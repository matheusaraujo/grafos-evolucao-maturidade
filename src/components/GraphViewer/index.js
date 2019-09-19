import { connect } from 'react-redux';
import GraphViewer from './GraphViewer';
import { fillModal, showModal } from '../../actions/index';

const mapStateToProps = (state) => ({
  graph: state.graph,
  nodeGroups: state.nodeGroups,
  options: state.options,
});

const mapDispatchToProps = (dispatch) => ({
  fillModal: (title, subtitle, content) => { dispatch(fillModal(title, subtitle, content)); },
  showModal: () => { dispatch(showModal()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphViewer);
