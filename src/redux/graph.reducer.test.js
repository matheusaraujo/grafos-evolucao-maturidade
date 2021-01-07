import graph from './graph.reducer';

describe('graph reducer', () => {
  test('should handle UPDATE_GRAPH', () => {
    expect(graph(undefined, { type: 'UPDATE_GRAPH', graph: { edges: [], nodes: [] } }))
      .toStrictEqual({ edges: [], nodes: [], epoch: 1 });
  });
  test('should handle UPDATE_NODES', () => {
    expect(graph(undefined, { type: 'UPDATE_NODES', nodes: [{ id: 1 }] }))
      .toStrictEqual({ nodes: [{ id: 1 }], edges: [] });
  });
  test('should handle UPDATE_EDGES', () => {
    expect(graph(undefined, { type: 'UPDATE_EDGES', edges: [{ id: 1 }] }))
      .toStrictEqual({ nodes: [], edges: [{ id: 1 }] });
  });
  test('should handle default', () => {
    expect(graph(undefined, undefined))
      .toStrictEqual({ nodes: [], edges: [] });
  });
  test('should handle UPDATE_NODE_STATUS', () => {
    const initial = {
      edges: [],
      nodes: [{ id: 1, status: 0 }, { id: 2, status: 1 }],
    };
    const expected = {
      edges: [],
      nodes: [{ id: 1, status: 1, temp: true }, { id: 2, status: 1 }],
    };
    const received = graph(initial, {
      type: 'UPDATE_NODE_STATUS',
      id: 1,
      status: 1,
      temp: true,
    });
    expect(received).toStrictEqual(expected);
  });
});
