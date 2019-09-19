import { connect } from 'react-redux';
import InitialPage from './InitialPage';
import { updateGraph } from '../../actions/graph';
import { viewGraph } from '../../actions/page';

const mapStateToProps = (state) => ({
  lang: state.page.lang,
});

const mapDispatchToProps = (dispatch) => ({
  viewGraph: () => { dispatch(viewGraph()); },
  updateGraph: (graph) => { dispatch(updateGraph(graph)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitialPage);
