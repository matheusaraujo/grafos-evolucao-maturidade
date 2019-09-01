import * as actions from './index';

describe('actions', () => {
  test('toggleCode should create TOGGLE_CODE action', () => {
    expect(actions.toggleCode())
      .toEqual({
        type: 'TOGGLE_CODE',
      });
  });

  test('loadPage should create LOAD_PAGE action', () => {
    expect(actions.loadPage())
      .toEqual({
        type: 'LOAD_PAGE',
      });
  });

  test('updateGraph should create UPDADE_GRAPH action', () => {
    expect(actions.updateGraph({ edges: [], nodes: [] }))
      .toEqual({ type: 'UPDATE_GRAPH', graph: { edges: [], nodes: [] } });
  });
});
