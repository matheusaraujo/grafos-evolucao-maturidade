import { connect } from 'react-redux';
import NextsOptions from './NextsOptions';
import {
  showNexts, hideNexts, beginCalcNexts, endCalcNexts,
} from '../../../actions/nexts';
import Nexts from '../../../services/Nexts/Nexts';

const mapStateToProps = (state) => ({
  graph: state.graph,
  nexts: state.nexts,
});

const mapDispatchToProps = (dispatch) => ({
  showNexts: () => { dispatch(showNexts()); },
  hideNexts: () => { dispatch(hideNexts()); },
  beginCalcNexts: (graph, params) => {
    dispatch(beginCalcNexts());
    const options = Nexts(graph.nodes, graph.edges, {
      minWeight: params.minWeight || 195,
      maxWeight: params.maxWeight || 375,
      maxDistance: params.maxDistance || 3,
      forceMinimumLevel: params.forceMinimumLevel || false,
    });
    dispatch(endCalcNexts(options));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NextsOptions);
