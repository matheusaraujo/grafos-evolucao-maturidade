export const isAllPrecedentsDone = (nodeId, nodes, edges) => {
  if (!nodeId || !nodes || nodes.length === 0) return false;

  const node = nodes.find((n) => n.id === nodeId);
  if (!node) return false;

  if (!edges || edges.length === 0) return true;
  const edgesToNode = edges.filter((e) => e.to === nodeId);

  if (!edgesToNode || edgesToNode.length === 0) return true;

  let isAllDone = true;
  edgesToNode.forEach((e) => {
    const nodeFrom = nodes.find((n) => n.id === e.from);
    isAllDone = isAllDone && nodeFrom && nodeFrom.status !== 0;
  });

  return isAllDone;
};

export const filterPending = (nodes) => {
  if (!nodes || nodes.length === 0) return [];
  return nodes.filter((n) => n.status === 0);
};

export const filterAllPrecedentsDone = (nodesToFilter, allNodes, edges) => {
  const avaiableNodes = nodesToFilter.filter((n) => isAllPrecedentsDone(n.id, allNodes, edges));
  return avaiableNodes;
};
