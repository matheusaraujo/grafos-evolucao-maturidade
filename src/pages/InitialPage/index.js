import { connect } from 'react-redux';
import InitialPage from './InitialPage';
import { updateGraph } from '../../redux/graph.actions';
import { viewGraph } from '../../redux/page.actions';
import { updateNodeGroups } from '../../redux/general.actions';

const mapDispatchToProps = (dispatch) => ({
  updateNodeGroups: (nodeGroups) => { dispatch(updateNodeGroups(nodeGroups)); },
  updateGraph: (graph) => { dispatch(updateGraph(graph)); },
  viewGraph: () => { dispatch(viewGraph()); },
});

export default connect(
  null,
  mapDispatchToProps,
)(InitialPage);
