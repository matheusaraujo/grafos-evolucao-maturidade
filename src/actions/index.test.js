import * as actions from './index';

describe('actions', () => {
  test('updateGraph should create UPDADE_GRAPH action', () => {
    expect(actions.updateGraph({ edges: [], nodes: [] }))
      .toEqual({ type: 'UPDATE_GRAPH', graph: { edges: [], nodes: [] } });
  });

  test('updateOptions should create UPDATE_OPTIONS action', () => {
    expect(actions.updateOptions({ layout: { hierarchical: { enabled: true, direction: 'LR' } } }))
      .toEqual({ type: 'UPDATE_OPTIONS', options: { layout: { hierarchical: { enabled: true, direction: 'LR' } } } });
  });

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
});
