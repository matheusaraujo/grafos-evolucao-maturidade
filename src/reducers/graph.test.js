import graph from './graph';

describe('graph reducer', () => {
  test('should handle UPDATE_GRAPH', () => {
    expect(graph(null, { type: 'UPDATE_GRAPH', graph: { edges: [], nodes: [] } }))
      .toEqual({ edges: [], nodes: [] });
  });
  test('should handle default', () => {
    expect(graph(undefined, undefined))
      .toEqual({ nodes: [], edges: [] });
  });
});
