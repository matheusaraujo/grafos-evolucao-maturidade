import { connect } from 'react-redux';
import InitialPage from './InitialPage';
import { updateGraph, loadPage } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  loadPage: () => { dispatch(loadPage()); },
  updateGraph: (graph) => { dispatch(updateGraph(graph)); },
});

export default connect(
  null,
  mapDispatchToProps,
)(InitialPage);
