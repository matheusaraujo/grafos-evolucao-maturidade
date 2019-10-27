import { connect } from 'react-redux';
import MainPage from './MainPage';
import { viewGraph, editNodes } from '../../redux/page.actions';
import { showNexts } from '../../redux/nexts.actions';

const mapStateToProps = (state) => ({
  pageMode: state.page.mode,
  featureNexts: state.page.features.nexts,
});

const mapDispatchToProps = (dispatch) => ({
  editNodes: () => { dispatch(editNodes()); },
  viewGraph: () => { dispatch(viewGraph()); },
  showNexts: () => { dispatch(showNexts()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
