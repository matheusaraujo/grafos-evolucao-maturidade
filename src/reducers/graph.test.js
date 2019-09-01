import graph from './graph';

describe('graph reducer', () => {
  test('should handle UPDATE_GRAPH', () => {
    expect(graph({ edges: [], nodes: [] }, { type: 'UPDATE_GRAPH' }))
      .toEqual({ edges: [], nodes: [] });
  });
  test('should handle default', () => {
    expect(graph(undefined, undefined))
      .toEqual({ nodes: [], edges: [] });
  });
});
