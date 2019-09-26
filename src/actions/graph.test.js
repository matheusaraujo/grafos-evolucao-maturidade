import * as actions from './graph';

describe('actions graph', () => {
  test('updateGraph should create UPDADE_GRAPH action', () => {
    expect(actions.updateGraph({ edges: [], nodes: [] }))
      .toEqual({ type: 'UPDATE_GRAPH', graph: { edges: [], nodes: [] } });
  });
  test('updateNodes should create UPDADE_NODES action', () => {
    expect(actions.updateNodes([]))
      .toEqual({ type: 'UPDATE_NODES', nodes: [] });
  });
  test('updateEdges should create UPDADE_EDGES action', () => {
    expect(actions.updateEdges([]))
      .toEqual({ type: 'UPDATE_EDGES', edges: [] });
  });
});
