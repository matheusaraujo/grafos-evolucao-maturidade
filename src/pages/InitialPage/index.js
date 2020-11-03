import { connect } from 'react-redux';
import InitialPage from './InitialPage';
import { updateGraph } from '../../redux/graph.actions';
import { viewGraph, setFeatures } from '../../redux/page.actions';
import { updateNodeGroups, updateOptions } from '../../redux/general.actions';
import basicGraph from '../../examples/basicGraph';
import systemEngineerGraph from '../../examples/systemEngineerGraph';
import systemEngineerGraph20182 from '../../examples/systemEngineerGraph.20182';
import systemEngineerGraph20201 from '../../examples/systemEngineerGraph.20201';
import devOpsGraphGeneral from '../../examples/devOpsGraph.general';
import devOpsGraphDetailed from '../../examples/devOpsGraph.detailed';

const mapDispatchToProps = (dispatch) => ({
  updateNodeGroups: (nodeGroups) => { dispatch(updateNodeGroups(nodeGroups)); },
  updateGraph: (graph) => { dispatch(updateGraph(graph)); },
  viewGraph: () => { dispatch(viewGraph()); },

  openBasicGraph: () => {
    dispatch(setFeatures({ nexts: false }));
    dispatch(updateOptions({
      hierarchical: true,
      hierarchicalDirection: 'R',
      animation: true,
    }));
    dispatch(updateNodeGroups(basicGraph.groups));
    dispatch(updateGraph({ nodes: basicGraph.nodes, edges: basicGraph.edges }));
    dispatch(viewGraph());
  },

  openSystemEngineerGraph1: () => {
    dispatch(setFeatures({ nexts: false }));
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
    dispatch(setFeatures({ nexts: false }));
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
    dispatch(setFeatures({ nexts: true }));
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
    dispatch(setFeatures({ nexts: true }));
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

  openSystemEngineerGraph5: () => {
    dispatch(setFeatures({ nexts: true }));
    dispatch(updateOptions({
      hierarchical: true,
      hierarchicalDirection: 'R',
      animation: false,
    }));
    dispatch(updateNodeGroups(systemEngineerGraph20201.groups));
    dispatch(updateGraph({
      nodes: systemEngineerGraph20201.nodes.map((n) => (
        { ...n, status: 2 })),
      edges: systemEngineerGraph20201.edges,
    }));
    dispatch(viewGraph());
  },

  openDevOpsGraph1: () => {
    dispatch(setFeatures({ nexts: false }));
    dispatch(updateOptions({
      hierarchical: true,
      hierarchicalDirection: 'D',
      animation: true,
    }));
    dispatch(updateNodeGroups(devOpsGraphGeneral.groups));
    dispatch(updateGraph({
      nodes: devOpsGraphGeneral.nodes,
      edges: devOpsGraphGeneral.edges,
    }));
    dispatch(viewGraph());
  },

  openDevOpsGraph2: () => {
    dispatch(setFeatures({ nexts: false }));
    dispatch(updateOptions({
      hierarchical: false,
      animation: true,
    }));
    dispatch(updateNodeGroups(devOpsGraphDetailed.groups));
    dispatch(updateGraph({
      nodes: devOpsGraphDetailed.nodes.map((n) => (
        { ...n, status: undefined })),
      edges: devOpsGraphDetailed.edges,
    }));
    dispatch(viewGraph());
  },

  openDevOpsGraph3: () => {
    dispatch(setFeatures({ nexts: false }));
    dispatch(updateOptions({
      hierarchical: false,
      animation: true,
    }));
    dispatch(updateNodeGroups(devOpsGraphDetailed.groups));
    dispatch(updateGraph({
      nodes: devOpsGraphDetailed.nodes,
      edges: devOpsGraphDetailed.edges,
    }));
    dispatch(viewGraph());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(InitialPage);
