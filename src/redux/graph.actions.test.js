import * as actions from './graph.actions';

describe('actions graph', () => {
  test('updateGraph should create UPDADE_GRAPH action', () => {
    expect(actions.updateGraph({ edges: [], nodes: [] }))
      .toStrictEqual({ type: 'UPDATE_GRAPH', graph: { edges: [], nodes: [] } });
  });
  test('updateNodes should create UPDADE_NODES action', () => {
    expect(actions.updateNodes([]))
      .toStrictEqual({ type: 'UPDATE_NODES', nodes: [] });
  });
  test('updateEdges should create UPDADE_EDGES action', () => {
    expect(actions.updateEdges([]))
      .toStrictEqual({ type: 'UPDATE_EDGES', edges: [] });
  });
  test('updateNodeStatus should create UPDATE_NODE_STATUS action', () => {
    expect(actions.updateNodeStatus(1, 1))
      .toStrictEqual({
        type: 'UPDATE_NODE_STATUS',
        id: 1,
        status: 1,
        temp: undefined,
      });
  });
  test('updateNodeStatus should create UPDATE_NODE_STATUS action with temp', () => {
    expect(actions.updateNodeStatus(1, 1, false))
      .toStrictEqual({
        type: 'UPDATE_NODE_STATUS',
        id: 1,
        status: 1,
        temp: false,
      });
  });
});
