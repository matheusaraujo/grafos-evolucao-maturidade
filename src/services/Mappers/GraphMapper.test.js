import {
  mapGraph,
  getNodeBorder,
  getEdgeColor,
  getNodeColor,
  adjustEdges,
  calcNodeDegree,
  getNodesToFakeEdge,
  getNodeShapeProperties,
  getNodeBorderWidth,
} from './GraphMapper';

describe('GraphMapper', () => {
  test('getNodeBorder - default', () => {
    expect(getNodeBorder(null)).toEqual('#00000055');
  });
  test('getNodeBorder - status = 0', () => {
    expect(getNodeBorder({ status: 0 })).toEqual('#ffffff');
  });
  test('getEdgeColor - nodeFrom.status = 0', () => {
    const graph = { nodes: [{ id: 0, status: 0 }, { id: 1 }] };
    const edge = { from: 0, to: 1 };
    expect(getEdgeColor(graph, edge)).toEqual('#00000033');
  });
  test('getEdgeColor - nodeTo.status = 0', () => {
    const graph = { nodes: [{ id: 0, status: 1 }, { id: 1, status: 0 }] };
    const edge = { from: 0, to: 1 };
    expect(getEdgeColor(graph, edge)).toEqual('#00000033');
  });
  test('getEdgeColor - nodeFrom.status and nodeTo.status != 0', () => {
    const graph = { nodes: [{ id: 0, status: 1 }, { id: 1, status: 1 }] };
    const edge = { from: 0, to: 1 };
    expect(getEdgeColor(graph, edge)).toEqual('#000000ff');
  });
  test('getNodeColor - no group', () => {
    const node = { status: 0 };
    expect(getNodeColor(node, undefined)).toEqual(undefined);
  });
  test('getNodeColor - status 0', () => {
    const node = { id: 1, groupId: 1, status: 0 };
    const groups = [{ id: 1, color: '#123456' }];
    expect(getNodeColor(node, groups)).toEqual('#12345633');
  });
  test('getNodeColor - status 1', () => {
    const node = { id: 1, groupId: 1, status: 1 };
    const groups = [{ id: 1, color: '#123456' }];
    expect(getNodeColor(node, groups)).toEqual('#123456ff');
  });
  test('getNodeColor - no group', () => {
    const node = { id: 1, groupId: 2, status: 1 };
    const groups = [{ id: 1, color: '#123456' }];
    expect(getNodeColor(node, groups)).toEqual(undefined);
  });
  test('getNodeShapeProperties', () => {
    const noDashes = { borderDashes: false };
    const dashes = { borderDashes: [15, 15, 15] };
    expect(getNodeShapeProperties(null)).toStrictEqual(noDashes);
    expect(getNodeShapeProperties({})).toStrictEqual(noDashes);
    expect(getNodeShapeProperties({ temp: false })).toStrictEqual(noDashes);
    expect(getNodeShapeProperties({ temp: true })).toStrictEqual(dashes);
  });
  test('getNodeBorderWidth', () => {
    expect(getNodeBorderWidth(null)).toEqual(1);
    expect(getNodeBorderWidth({})).toEqual(1);
    expect(getNodeBorderWidth({ temp: false })).toEqual(1);
    expect(getNodeBorderWidth({ temp: true })).toEqual(3);
  });
  test('mapGraph', () => {
    const graph = {
      nodes: [{
        id: 1,
        label: '1',
        title: 't1',
        level: 1,
        groupId: 1,
      },
      {
        id: 2,
        label: '2',
        title: 't2',
        level: 2,
        groupId: 1,
        temp: true,
      }],
      edges: [{
        id: 1,
        from: 1,
        to: 2,
        title: 't1',
      }],
    };
    const nodeGroups = [{
      id: 1,
      color: '#123456',
    }];
    const expected = {
      edges: [
        {
          arrows: 'to',
          color: {
            color: '#000000ff',
          },
          from: 1,
          id: 1,
          title: undefined,
          to: 2,
        },
      ],
      nodes: [
        {
          borderWidth: 1,
          color: {
            background: '#123456ff',
            border: '#00000055',
          },
          id: 1,
          label: '1',
          level: 1,
          shape: 'circle',
          title: 't1',
          shapeProperties: {
            borderDashes: false,
          },
        },
        {
          borderWidth: 3,
          color: {
            background: '#123456ff',
            border: '#00000055',
          },
          id: 2,
          label: '2',
          level: 2,
          shape: 'circle',
          title: 't2',
          shapeProperties: {
            borderDashes: [15, 15, 15],
          },
        },
      ],
    };
    const received = mapGraph(graph, nodeGroups);
    expect(received).toStrictEqual(expected);
  });
  test('calcNodeDegree, 0 indegree, 0 outdegree', () => {
    const node = { id: 2 };
    const edges = [{ id: 1, from: 1, to: 3 }];
    const expected = { id: 2, indegree: 0, outdegree: 0 };
    const received = calcNodeDegree(node, edges);
    expect(received).toStrictEqual(expected);
  });
  test('calcNodeDegree, 1 indegree, 0 outdegree', () => {
    const node = { id: 3 };
    const edges = [{ id: 1, from: 1, to: 3 }];
    const expected = { id: 3, indegree: 1, outdegree: 0 };
    const received = calcNodeDegree(node, edges);
    expect(received).toStrictEqual(expected);
  });
  test('calcNodeDegree, 0 indegree, 1 outdegree', () => {
    const node = { id: 1 };
    const edges = [{ id: 1, from: 1, to: 3 }];
    const expected = { id: 1, indegree: 0, outdegree: 1 };
    const received = calcNodeDegree(node, edges);
    expect(received).toStrictEqual(expected);
  });
  test('getNodesToFakeEdge - one node', () => {
    const nodes = [
      {
        id: 1, indegree: 1, outdegree: 1, level: 1,
      },
      {
        id: 2, indegree: 2, outdegree: 2, level: 2,
      },
    ];
    const expected = [{
      id: 2, indegree: 2, outdegree: 2, level: 2,
    }];
    const received = getNodesToFakeEdge(nodes, 2);
    expect(received).toStrictEqual(expected);
  });
  test('getNodesToFakeEdge - two nodes', () => {
    const nodes = [
      {
        id: 1, indegree: 1, outdegree: 1, level: 1,
      },
      {
        id: 2, indegree: 2, outdegree: 2, level: 1,
      },
    ];
    const expected = [
      {
        id: 1, indegree: 1, outdegree: 1, level: 1,
      },
      {
        id: 2, indegree: 2, outdegree: 2, level: 1,
      },
    ];
    const received = getNodesToFakeEdge(nodes, 1);
    expect(received).toStrictEqual(expected);
  });
  test('adjustEdges - case 1', () => {
    const graph = {
      nodes: [
        { id: 1, level: 1 },
        { id: 2, level: 1 },
        { id: 3, level: 2 },
        { id: 4, level: 2 },
      ],
      edges: [
        { id: 1, from: 1, to: 3 },
        { id: 2, from: 2, to: 3 },
      ],
    };

    const expected = {
      nodes: [
        {
          id: 1, level: 1, indegree: 0, outdegree: 1,
        },
        {
          id: 2, level: 1, indegree: 0, outdegree: 1,
        },
        {
          id: 3, level: 2, indegree: 2, outdegree: 0,
        },
        {
          id: 4, level: 2, indegree: 0, outdegree: 0,
        },
      ],
      edges: [
        {
          id: 1, from: 1, to: 3,
        },
        {
          id: 2, from: 2, to: 3,
        },
        {
          from: 1, to: 4, hidden: true,
        },
        {
          from: 2, to: 4, hidden: true,
        },
      ],
    };
    const received = adjustEdges(graph);
    expect(received).toStrictEqual(expected);
  });
  test('adjustEdges - case 2', () => {
    const graph = {
      nodes: [
        { id: 1, level: 1 },
        { id: 5, level: 1 },
        { id: 2, level: 2 },
        { id: 3, level: 2 },
        { id: 4, level: 3 },
      ],
      edges: [
        { id: 1, from: 2, to: 4 },
        { id: 2, from: 3, to: 4 },
        { id: 3, from: 5, to: 2 },
        { id: 4, from: 5, to: 3 },
      ],
    };

    const expected = {
      nodes: [
        {
          id: 1, level: 1, indegree: 0, outdegree: 0,
        },
        {
          id: 5, level: 1, indegree: 0, outdegree: 2,
        },
        {
          id: 2, level: 2, indegree: 1, outdegree: 1,
        },
        {
          id: 3, level: 2, indegree: 1, outdegree: 1,
        },
        {
          id: 4, level: 3, indegree: 2, outdegree: 0,
        },
      ],
      edges: [
        {
          id: 1, from: 2, to: 4,
        },
        {
          id: 2, from: 3, to: 4,
        },
        {
          id: 3, from: 5, to: 2,
        },
        {
          id: 4, from: 5, to: 3,
        },
        {
          from: 1, to: 2, hidden: true,
        },
        {
          from: 1, to: 3, hidden: true,
        },
      ],
    };
    const received = adjustEdges(graph);
    expect(received).toStrictEqual(expected);
  });
});
