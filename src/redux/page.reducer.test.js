import page from './page.reducer';

describe('page reducer', () => {
  test('should handle default', () => {
    expect(page(undefined, undefined))
      .toEqual({
        lang: 'pt',
        mode: 'initial',
      });
  });
  test('should handle INIT_APP', () => {
    expect(page(undefined, { type: 'INIT_APP' }))
      .toMatchObject({
        mode: 'initial',
      });
  });
  test('should handle VIEW_GRAPH', () => {
    expect(page(undefined, { type: 'VIEW_GRAPH' }))
      .toMatchObject({
        mode: 'viewing',
      });
  });
  test('should handle EDIT_NODES', () => {
    expect(page(undefined, { type: 'EDIT_NODES' }))
      .toMatchObject({
        mode: 'editing_nodes',
      });
  });
  test('should handle EDIT_NODE_GROUPS', () => {
    expect(page(undefined, { type: 'EDIT_NODE_GROUPS' }))
      .toMatchObject({
        mode: 'editing_node_groups',
      });
  });
  test('should handle EDIT_EDGES', () => {
    expect(page(undefined, { type: 'EDIT_EDGES' }))
      .toMatchObject({
        mode: 'editing_edges',
      });
  });
  test('should handle EDIT_OPTIONS', () => {
    expect(page(undefined, { type: 'EDIT_OPTIONS' }))
      .toMatchObject({
        mode: 'editing_options',
      });
  });
});
