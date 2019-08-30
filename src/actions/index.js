export const init = () => ({
  type: 'INIT',
});

export const apply = (graph) => ({
  type: 'APPLY',
  graph,
});
