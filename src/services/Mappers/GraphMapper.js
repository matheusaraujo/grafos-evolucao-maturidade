export const getNodeBorder = (node) => {
  if (node && node.status !== undefined && node.status === 0) return '#ffffff';
  return '#00000055';
};

export const getEdgeColor = (graph, edge) => {
  const nodeFrom = graph.nodes.find((n) => n.id === edge.from);
  const nodeTo = graph.nodes.find((n) => n.id === edge.to);
  if (nodeFrom && nodeFrom.status !== undefined && nodeFrom.status === 0) return '#00000033';
  if (nodeTo && nodeTo.status !== undefined && nodeTo.status === 0) return '#00000033';
  return '#000000ff';
};

export const getNodeColor = (node, nodeGroups) => {
  const opacity = node && node.status !== undefined && node.status === 0 ? '33' : 'ff';
  if (!node.groupId) return undefined;
  const g = nodeGroups.find((ng) => ng.id === node.groupId);
  if (!g) return undefined;
  return g.color + opacity;
};

export const graphMapper = (graph, nodeGroups) => ({
  nodes: graph.nodes.map((n) => ({
    id: n.id,
    label: n.label,
    title: n.title,
    shape: 'circle',
    color: {
      background: getNodeColor(n, nodeGroups),
      border: getNodeBorder(n),
    },
    level: n.level,
  })),
  edges: graph.edges.map((e) => ({
    id: e.id,
    from: e.from,
    to: e.to,
    title: e.label,
    arrows: 'to',
    color: {
      color: getEdgeColor(graph, e),
    },
  })),
});

export default graphMapper;
