import { connect } from 'react-redux';
import MainPage from './MainPage';
import { viewGraph, editNodes } from '../../redux/page.actions';

const mapStateToProps = (state) => ({
  pageMode: state.page.mode,
});

const mapDispatchToProps = (dispatch) => ({
  editNodes: () => { dispatch(editNodes()); },
  viewGraph: () => { dispatch(viewGraph()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
