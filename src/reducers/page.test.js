import page from './page';

describe('page reducer', () => {
  test('should handle initial state', () => {
    expect(page(undefined, {}))
      .toEqual({ graph: undefined });
  });

  test('should handle INIT', () => {
    expect(page({ graph: {} }, { type: 'INIT' }))
      .toEqual({ graph: undefined });
  });

  test('should handle APPLY', () => {
    expect(page(undefined, { type: 'APPLY', graph: { nodes: [], edges: [] } }))
      .toEqual({ graph: { nodes: [], edges: [] } });
  });
});
