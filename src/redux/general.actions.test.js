import * as actions from './general.actions';

describe('actions index', () => {
  test('updateOptions should create UPDATE_OPTIONS action', () => {
    expect(actions.updateOptions({ layout: { hierarchical: { enabled: true, direction: 'LR' } } }))
      .toStrictEqual({ type: 'UPDATE_OPTIONS', options: { layout: { hierarchical: { enabled: true, direction: 'LR' } } } });
  });
  test('updateNodeGroups should create UPDATE_NODE_GROUPS action', () => {
    expect(actions.updateNodeGroups([]))
      .toStrictEqual({ type: 'UPDATE_NODE_GROUPS', nodeGroups: [] });
  });
  test('showModal should create SHOW_MODAL action', () => {
    expect(actions.showModal())
      .toStrictEqual({
        type: 'SHOW_MODAL',
      });
  });
  test('hideModal should create HIDE_MODAL action', () => {
    expect(actions.hideModal())
      .toStrictEqual({
        type: 'HIDE_MODAL',
      });
  });
  test('fillModal should create FILL_MODAL action', () => {
    expect(actions.fillModal('blah', undefined, 'foo'))
      .toStrictEqual({
        type: 'FILL_MODAL',
        title: 'blah',
        subtitle: undefined,
        content: 'foo',
      });
  });
});
