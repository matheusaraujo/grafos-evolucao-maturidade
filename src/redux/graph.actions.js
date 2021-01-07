export const updateGraph = (graph) => ({
  type: 'UPDATE_GRAPH',
  graph,
});

export const updateNodes = (nodes) => ({
  type: 'UPDATE_NODES',
  nodes,
});

export const updateEdges = (edges) => ({
  type: 'UPDATE_EDGES',
  edges,
});

export const updateNodeStatus = (id, status, temp, epoch) => ({
  type: 'UPDATE_NODE_STATUS',
  id,
  status,
  temp,
  epoch,
});

export const incrementEpoch = () => ({
  type: 'INCREMENT_EPOCH',
});
