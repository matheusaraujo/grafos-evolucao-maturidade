import * as actions from './page.actions';

describe('actions page', () => {
  test('viewGraph should create VIEW_GRAPH action', () => {
    expect(actions.viewGraph())
      .toEqual({ type: 'VIEW_GRAPH' });
  });
  test('initApp should create INIT_APP action', () => {
    expect(actions.initApp())
      .toEqual({ type: 'INIT_APP' });
  });
  test('editNodes should create EDIT_NODES action', () => {
    expect(actions.editNodes())
      .toEqual({ type: 'EDIT_NODES' });
  });
  test('editNodeGroups should create EDIT_NODE_GROUPS action', () => {
    expect(actions.editNodeGroups())
      .toEqual({ type: 'EDIT_NODE_GROUPS' });
  });
  test('editEdges should create EDIT_EDGES action', () => {
    expect(actions.editEdges())
      .toEqual({ type: 'EDIT_EDGES' });
  });
  test('editOptions should create EDIT_OPTIONS action', () => {
    expect(actions.editOptions())
      .toEqual({ type: 'EDIT_OPTIONS' });
  });
});
