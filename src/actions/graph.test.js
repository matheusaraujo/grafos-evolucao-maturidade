import * as actions from './graph';

describe('actions graph', () => {
  test('updateGraph should create UPDADE_GRAPH action', () => {
    expect(actions.updateGraph({ edges: [], nodes: [] }))
      .toEqual({ type: 'UPDATE_GRAPH', graph: { edges: [], nodes: [] } });
  });
});
