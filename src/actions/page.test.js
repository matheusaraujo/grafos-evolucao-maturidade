import * as actions from './page';

describe('actions index', () => {
  test('viewGraph should create VIEW_GRAPH action', () => {
    expect(actions.viewGraph())
      .toEqual({ type: 'VIEW_GRAPH' });
  });
});
