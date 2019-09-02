import { connect } from 'react-redux';
import InitialPage from './InitialPage';
import { updateGraph, loadPage } from '../../actions';

const mapStateToProps = (state) => ({
  lang: state.page.lang,
});

const mapDispatchToProps = (dispatch) => ({
  loadPage: () => { dispatch(loadPage()); },
  updateGraph: (graph) => { dispatch(updateGraph(graph)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitialPage);
