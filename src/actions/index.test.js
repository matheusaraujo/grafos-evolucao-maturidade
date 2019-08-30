import * as actions from './index';

describe('page actions', () => {
  test('init should create INIT action', () => {
    expect(actions.init())
      .toEqual({
        type: 'INIT',
      });
  });

  test('apply should create APPLY action', () => {
    expect(actions.apply({ nodes: [], edges: [] }))
      .toEqual({
        type: 'APPLY',
        graph: { nodes: [], edges: [] },
      });
  });
});
