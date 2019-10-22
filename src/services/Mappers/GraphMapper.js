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

export const calcNodeDegree = (node, edges) => {
  const edgeIn = edges.filter((e) => e.to === node.id).length;
  const edgeOut = edges.filter((e) => e.from === node.id).length;
  return { ...node, indegree: edgeIn, outdegree: edgeOut };
};

export const getNodeToFakeEdge = (nodes, level) => {
  const candidates = nodes.filter((n) => n.level === level);
  candidates.sort((a, b) => (b.indegree + b.outdegree) - (a.indegree + a.outdegree));
  return candidates[0];
};

export const adjustEdges = (_graph) => {
  const graph = { ..._graph };
  graph.nodes = graph.nodes.map((n) => calcNodeDegree(n, graph.edges));
  graph.nodes.forEach((node) => {
    if (node.level === 1 && node.outdegree === 0) {
      const nextNode = getNodeToFakeEdge(graph.nodes, 2);
      if (nextNode) {
        graph.edges.push({
          from: node.id,
          to: nextNode.id,
          hidden: true,
        });
      }
    } else if (node.level > 1 && node.indegree === 0) {
      const lastNode = getNodeToFakeEdge(graph.nodes, node.level - 1);
      if (lastNode) {
        graph.edges.push({
          from: lastNode.id,
          to: node.id,
          hidden: true,
        });
      }
    }
  });
  return graph;
};

export const graphMapper = (_graph, nodeGroups, hierarchical) => {
  let graph = {
    nodes: _graph.nodes.map((n) => ({
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
    edges: _graph.edges.map((e) => ({
      id: e.id,
      from: e.from,
      to: e.to,
      title: e.label,
      arrows: 'to',
      color: {
        color: getEdgeColor(_graph, e),
      },
    })),
  };
  if (hierarchical) graph = adjustEdges(graph);
  return graph;
};
