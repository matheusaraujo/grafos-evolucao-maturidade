import page from './page.reducer';

describe('page reducer', () => {
  test('should handle default', () => {
    expect(page(undefined, undefined))
      .toStrictEqual({
        lang: 'pt',
        mode: 'initial',
        features: {
          nexts: false,
        },
      });
  });
  test('should handle INIT_APP', () => {
    expect(page(undefined, { type: 'INIT_APP' }))
      .toStrictEqual({
        lang: 'pt',
        mode: 'initial',
        features: {
          nexts: false,
        },
      });
  });
  test('should handle VIEW_GRAPH', () => {
    expect(page(undefined, { type: 'VIEW_GRAPH' }))
      .toStrictEqual({
        lang: 'pt',
        mode: 'viewing',
        features: {
          nexts: false,
        },
      });
  });
  test('should handle EDIT_NODES', () => {
    expect(page(undefined, { type: 'EDIT_NODES' }))
      .toStrictEqual({
        lang: 'pt',
        mode: 'editing_nodes',
        features: {
          nexts: false,
        },
      });
  });
  test('should handle EDIT_NODE_GROUPS', () => {
    expect(page(undefined, { type: 'EDIT_NODE_GROUPS' }))
      .toStrictEqual({
        lang: 'pt',
        mode: 'editing_node_groups',
        features: {
          nexts: false,
        },
      });
  });
  test('should handle EDIT_EDGES', () => {
    expect(page(undefined, { type: 'EDIT_EDGES' }))
      .toStrictEqual({
        lang: 'pt',
        mode: 'editing_edges',
        features: {
          nexts: false,
        },
      });
  });
  test('should handle EDIT_OPTIONS', () => {
    expect(page(undefined, { type: 'EDIT_OPTIONS' }))
      .toStrictEqual({
        lang: 'pt',
        mode: 'editing_options',
        features: {
          nexts: false,
        },
      });
  });
  test('should handle SET_FEATURES', () => {
    expect(page(undefined, { type: 'SET_FEATURES', features: { nexts: true } }))
      .toStrictEqual({
        lang: 'pt',
        mode: 'initial',
        features: {
          nexts: true,
        },
      });
  });
});
