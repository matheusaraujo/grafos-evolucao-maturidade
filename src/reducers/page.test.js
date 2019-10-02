import page from './page';

describe('page reducer', () => {
  test('should handle default', () => {
    expect(page(undefined, undefined))
      .toEqual({
        lang: 'pt',
        mode: 'initial',
      });
  });
  test('should handle INIT_APP', () => {
    expect(page(null, { type: 'INIT_APP' }))
      .toMatchObject({
        mode: 'initial',
      });
  });
  test('should handle VIEW_GRAPH', () => {
    expect(page(null, { type: 'VIEW_GRAPH' }))
      .toMatchObject({
        mode: 'viewing',
      });
  });
  test('should handle EDIT_NODES', () => {
    expect(page(null, { type: 'EDIT_NODES' }))
      .toMatchObject({
        mode: 'editing_nodes',
      });
  });
  test('should handle EDIT_NODE_GROUPS', () => {
    expect(page(null, { type: 'EDIT_NODE_GROUPS' }))
      .toMatchObject({
        mode: 'editing_node_groups',
      });
  });
  test('should handle EDIT_EDGES', () => {
    expect(page(null, { type: 'EDIT_EDGES' }))
      .toMatchObject({
        mode: 'editing_edges',
      });
  });
  test('should handle EDIT_OPTIONS', () => {
    expect(page(null, { type: 'EDIT_OPTIONS' }))
      .toMatchObject({
        mode: 'editing_options',
      });
  });
});
