import { connect } from 'react-redux';
import InitialPage from './InitialPage';
import { updateGraph } from '../../redux/graph.actions';
import { viewGraph } from '../../redux/page.actions';
import { updateNodeGroups, updateOptions } from '../../redux/general.actions';
import basicGraph from '../../examples/basicGraph';
import systemEngineerGraph from '../../examples/systemEngineerGraph';
import systemEngineerGraph20182 from '../../examples/systemEngineerGraph.20182';

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

  openSystemEngineerGraph2: () => {
    dispatch(updateOptions({
      hierarchical: true,
      hierarchicalDirection: 'R',
      animation: false,
    }));
    dispatch(updateNodeGroups(systemEngineerGraph20182.groups));
    dispatch(updateGraph({
      nodes: systemEngineerGraph20182.nodes.map((n) => (
        { ...n, status: undefined })),
      edges: systemEngineerGraph20182.edges,
    }));
    dispatch(viewGraph());
  },

  openSystemEngineerGraph3: () => {
    dispatch(updateOptions({
      hierarchical: true,
      hierarchicalDirection: 'R',
      animation: false,
    }));
    dispatch(updateNodeGroups(systemEngineerGraph20182.groups));
    dispatch(updateGraph({
      nodes: systemEngineerGraph20182.nodes,
      edges: systemEngineerGraph20182.edges,
    }));
    dispatch(viewGraph());
  },

  openSystemEngineerGraph4: () => {
    dispatch(updateOptions({
      hierarchical: true,
      hierarchicalDirection: 'R',
      animation: false,
    }));
    dispatch(updateNodeGroups(systemEngineerGraph20182.groups));
    dispatch(updateGraph({
      nodes: systemEngineerGraph20182.nodes.map((n) => (
        { ...n, status: 0 })),
      edges: systemEngineerGraph20182.edges,
    }));
    dispatch(viewGraph());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(InitialPage);
