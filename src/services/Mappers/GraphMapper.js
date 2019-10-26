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

export const getNodeShapeProperties = (node) => (node && node.temp === true
  ? { borderDashes: [15, 15, 15] } : { borderDashes: false });

export const getNodeBorderWidth = (node) => (node && node.temp ? 3 : 1);

export const calcNodeDegree = (node, edges) => {
  const edgeIn = edges.filter((e) => e.to === node.id).length;
  const edgeOut = edges.filter((e) => e.from === node.id).length;
  return { ...node, indegree: edgeIn, outdegree: edgeOut };
};

export const getNodesToFakeEdge = (nodes, level) => {
  const candidates = nodes.filter((n) => n.level === level);
  const result = [candidates[0]];
  if (candidates[candidates.length - 1] !== candidates[0]) {
    result.push(candidates[candidates.length - 1]);
  }
  return result;
};

export const adjustEdges = (_graph) => {
  const graph = { ..._graph };
  graph.nodes = graph.nodes.map((n) => calcNodeDegree(n, graph.edges));
  graph.nodes.forEach((node) => {
    if (node.level === 1 && node.outdegree === 0) {
      const nodesAfter = getNodesToFakeEdge(graph.nodes, 2);
      if (nodesAfter && nodesAfter.length > 0) {
        graph.edges.push({
          from: node.id,
          to: nodesAfter[0].id,
          hidden: true,
        });
        if (nodesAfter.length > 1) {
          graph.edges.push({
            from: node.id,
            to: nodesAfter[1].id,
            hidden: true,
          });
        }
      }
    } else if (node.level > 1 && node.indegree === 0) {
      const nodesBefore = getNodesToFakeEdge(graph.nodes, node.level - 1);
      if (nodesBefore && nodesBefore.length > 0) {
        graph.edges.push({
          from: nodesBefore[0].id,
          to: node.id,
          hidden: true,
        });
        if (nodesBefore.length > 1) {
          graph.edges.push({
            from: nodesBefore[1].id,
            to: node.id,
            hidden: true,
          });
        }
      }
    }
  });
  return graph;
};

export const mapGraph = (graph, nodeGroups, hierarchical) => {
  let result = {
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
      shapeProperties: getNodeShapeProperties(n),
      borderWidth: getNodeBorderWidth(n),
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
  };
  if (hierarchical) result = adjustEdges(result);
  return result;
};
