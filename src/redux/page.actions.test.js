import * as actions from './page.actions';

describe('actions page', () => {
  test('viewGraph should create VIEW_GRAPH action', () => {
    expect(actions.viewGraph())
      .toStrictEqual({ type: 'VIEW_GRAPH' });
  });
  test('initApp should create INIT_APP action', () => {
    expect(actions.initApp())
      .toStrictEqual({ type: 'INIT_APP' });
  });
  test('editNodes should create EDIT_NODES action', () => {
    expect(actions.editNodes())
      .toStrictEqual({ type: 'EDIT_NODES' });
  });
  test('editNodeGroups should create EDIT_NODE_GROUPS action', () => {
    expect(actions.editNodeGroups())
      .toStrictEqual({ type: 'EDIT_NODE_GROUPS' });
  });
  test('editEdges should create EDIT_EDGES action', () => {
    expect(actions.editEdges())
      .toStrictEqual({ type: 'EDIT_EDGES' });
  });
  test('editOptions should create EDIT_OPTIONS action', () => {
    expect(actions.editOptions())
      .toStrictEqual({ type: 'EDIT_OPTIONS' });
  });
  test('setFeatures should create SET_FEATURES action', () => {
    expect(actions.setFeatures({ nexts: true }))
      .toStrictEqual({ type: 'SET_FEATURES', features: { nexts: true } });
  });
});
