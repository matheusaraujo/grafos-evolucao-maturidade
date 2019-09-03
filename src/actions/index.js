export const updateGraph = (graph) => ({
  type: 'UPDATE_GRAPH',
  graph,
});

export const updateOptions = (options) => ({
  type: 'UPDATE_OPTIONS',
  options,
});

export const toggleCode = () => ({
  type: 'TOGGLE_CODE',
});

export const loadPage = () => ({
  type: 'LOAD_PAGE',
});
