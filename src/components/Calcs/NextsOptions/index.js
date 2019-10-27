import { connect } from 'react-redux';
import NextsOptions from './NextsOptions';
import {
  showNexts,
  hideNexts,
  beginCalcNexts,
  endCalcNexts,
} from '../../../redux/nexts.actions';
import { updateNodeStatus } from '../../../redux/graph.actions';
import Nexts from '../../../services/Nexts/Nexts';

const mapStateToProps = (state) => ({
  graph: state.graph,
  nexts: state.nexts,
});

const mapDispatchToProps = (dispatch) => ({
  showNexts: () => { dispatch(showNexts()); },
  hideNexts: () => { dispatch(hideNexts()); },
  beginCalcNexts: (graph, params, callback) => {
    dispatch(beginCalcNexts());
    const options = Nexts(graph.nodes, graph.edges, {
      minWeight: params.minWeight || 195,
      maxWeight: params.maxWeight || 375,
      maxDistance: params.maxDistance || 3,
      forceMinimumLevel: params.forceMinimumLevel || false,
      mustIncludeNodes: params.mustIncludeNodes || null,
    });
    dispatch(endCalcNexts(options));
    callback(options);
  },
  changeNodesStatus: (ids) => {
    ids.forEach((id) => dispatch(updateNodeStatus(id, 1, true)));
    dispatch(hideNexts());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NextsOptions);
