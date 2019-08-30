import { connect } from 'react-redux';
import { apply, init } from '../actions';
import Page from './Page';

const mapStateToProps = (state) => ({
  graph: state.graph,
});

const mapDispatchToProps = (dispatch) => ({
  apply: (graph) => {
    dispatch(apply(graph));
  },
  init: () => {
    dispatch(init);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
