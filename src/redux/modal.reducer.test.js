import modal from './modal.reducer';

describe('modal reducer', () => {
  test('modal handle SHOW_MODAL', () => {
    expect(modal(undefined, { type: 'SHOW_MODAL' }))
      .toStrictEqual({
        visible: true,
        title: undefined,
        subtitle: undefined,
        content: undefined,
      });
  });

  test('should handle HIDE_MODAL', () => {
    expect(modal(undefined, { type: 'HIDE_MODAL' }))
      .toStrictEqual({
        visible: false,
        title: undefined,
        subtitle: undefined,
        content: undefined,
      });
  });

  test('should handle FILL_MODAL', () => {
    expect(modal(undefined, {
      type: 'FILL_MODAL', title: 't1', subtitle: 's2', content: 'blah',
    }))
      .toStrictEqual({
        title: 't1',
        subtitle: 's2',
        content: 'blah',
        visible: false,
      });
  });

  test('should handle default', () => {
    expect(modal(undefined, undefined))
      .toEqual({
        visible: false,
        title: undefined,
        subtitle: undefined,
        content: undefined,
      });
  });
});
