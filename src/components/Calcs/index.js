import { connect } from 'react-redux';
import Calcs from './Calcs';
import Nexts from '../../services/Nexts/Nexts';
import { beginCalcNexts, endCalcNexts } from '../../actions/nexts';

const mapStateToProps = (state) => ({
  graph: state.graph,
  lang: state.page.lang,
  nexts: state.nexts,
});

const mapDispatchToProps = (dispatch) => ({
  beginCalcNexts: (graph) => {
    dispatch(beginCalcNexts());
    const options = Nexts(graph.nodes, graph.edges, {
      minWeight: 195,
      maxWeight: 375,
      maxDistance: 3,
    });
    dispatch(endCalcNexts(options));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calcs);
