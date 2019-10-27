import { connect } from 'react-redux';
import InitialPage from './InitialPage';
import { updateGraph } from '../../redux/graph.actions';
import { viewGraph } from '../../redux/page.actions';
import { updateNodeGroups, updateOptions } from '../../redux/general.actions';
import basicGraph from '../../examples/basicGraph';
import systemEngineerGraph from '../../examples/systemEngineerGraph';

const mapDispatchToProps = (dispatch) => ({
  updateNodeGroups: (nodeGroups) => { dispatch(updateNodeGroups(nodeGroups)); },
  updateGraph: (graph) => { dispatch(updateGraph(graph)); },
  viewGraph: () => { dispatch(viewGraph()); },

  openBasicGraph: () => {
    dispatch(updateOptions({
      hierarchical: true,
      hierarchicalDirection: 'R',
      animation: true,
    }));
    dispatch(updateNodeGroups(basicGraph.groups));
    dispatch(updateGraph({ nodes: basicGraph.nodes, edges: basicGraph.edges }));
    dispatch(viewGraph());
  },

  openSystemEngineerGraph: () => {
    dispatch(updateOptions({
      hierarchical: true,
      hierarchicalDirection: 'R',
      animation: false,
    }));
    dispatch(updateNodeGroups(systemEngineerGraph.groups));
    dispatch(updateGraph({ nodes: systemEngineerGraph.nodes, edges: systemEngineerGraph.edges }));
    dispatch(viewGraph());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(InitialPage);
