import { connect } from 'react-redux';
import MainPage from './MainPage';
import { initApp, viewGraph, editNodes } from '../../actions/page';

const mapStateToProps = (state) => ({
  lang: state.page.lang,
  pageMode: state.page.mode,
});

const mapDispatchToProps = (dispatch) => ({
  initApp: () => { dispatch(initApp()); },
  editNodes: () => { dispatch(editNodes()); },
  viewGraph: () => { dispatch(viewGraph()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
