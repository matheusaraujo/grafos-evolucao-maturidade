import * as actions from './index';

describe('actions index', () => {
  test('updateOptions should create UPDATE_OPTIONS action', () => {
    expect(actions.updateOptions({ layout: { hierarchical: { enabled: true, direction: 'LR' } } }))
      .toEqual({ type: 'UPDATE_OPTIONS', options: { layout: { hierarchical: { enabled: true, direction: 'LR' } } } });
  });
  test('updateNodeGroups should create UPDATE_NODE_GROUPS action', () => {
    expect(actions.updateNodeGroups([]))
      .toEqual({ type: 'UPDATE_NODE_GROUPS', nodeGroups: [] });
  });
  test('showModal should create SHOW_MODAL action', () => {
    expect(actions.showModal())
      .toEqual({
        type: 'SHOW_MODAL',
      });
  });
  test('hideModal should create HIDE_MODAL action', () => {
    expect(actions.hideModal())
      .toEqual({
        type: 'HIDE_MODAL',
      });
  });
  test('fillModal should create FILL_MODAL action', () => {
    expect(actions.fillModal('blah', undefined, 'foo'))
      .toEqual({
        type: 'FILL_MODAL',
        title: 'blah',
        subtitle: undefined,
        content: 'foo',
      });
  });
});
