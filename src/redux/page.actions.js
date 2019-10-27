export const viewGraph = () => ({
  type: 'VIEW_GRAPH',
});

export const initApp = () => ({
  type: 'INIT_APP',
});

export const editNodes = () => ({
  type: 'EDIT_NODES',
});

export const editNodeGroups = () => ({
  type: 'EDIT_NODE_GROUPS',
});

export const editEdges = () => ({
  type: 'EDIT_EDGES',
});

export const editOptions = () => ({
  type: 'EDIT_OPTIONS',
});

export const setFeatures = (features) => ({
  type: 'SET_FEATURES',
  features,
});
