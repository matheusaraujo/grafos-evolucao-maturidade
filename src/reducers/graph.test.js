import graph from './graph';

describe('graph reducer', () => {
  test('should handle UPDATE_GRAPH', () => {
    expect(graph({ graph: { edges: [], nodes: [] } }, { type: 'UPDATE_GRAPH' }))
      .toEqual({ graph: { edges: [], nodes: [] } });
  });
  test('should handle default', () => {
    expect(graph({ a: 'a' }, { type: 'default' }))
      .toEqual({ a: 'a' });
  });
});
