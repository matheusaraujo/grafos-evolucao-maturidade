import graph from './graph';

describe('graph reducer', () => {
  test('should handle UPDATE_GRAPH', () => {
    expect(graph(undefined, { type: 'UPDATE_GRAPH', graph: { edges: [], nodes: [] } }))
      .toMatchObject({ edges: [], nodes: [] });
  });
  test('should handle UPDATE_NODES', () => {
    expect(graph(undefined, { type: 'UPDATE_NODES', nodes: [] }))
      .toMatchObject({ nodes: [] });
  });
  test('should handle UPDATE_EDGES', () => {
    expect(graph(undefined, { type: 'UPDATE_EDGES', edges: [] }))
      .toMatchObject({ edges: [] });
  });
  test('should handle default', () => {
    expect(graph(undefined, undefined))
      .toMatchObject({ nodes: [], edges: [] });
  });
});
