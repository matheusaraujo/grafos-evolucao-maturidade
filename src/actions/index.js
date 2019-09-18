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

export const unloadPage = () => ({
  type: 'UNLOAD_PAGE',
});

export const showModal = () => ({
  type: 'SHOW_MODAL',
});

export const hideModal = () => ({
  type: 'HIDE_MODAL',
});

export const fillModal = (title, subtitle, content) => ({
  type: 'FILL_MODAL',
  title,
  subtitle,
  content,
});

export const beginNodeEdition = () => ({
  type: 'BEGIN_NODE_EDITION',
});

export const endNodeEdition = () => ({
  type: 'END_NODE_EDITION',
});
