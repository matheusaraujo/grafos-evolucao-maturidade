import modal from './modal.reducer';

describe('modal reducer', () => {
  test('modal handle SHOW_MODAL', () => {
    expect(modal(undefined, { type: 'SHOW_MODAL' }))
      .toMatchObject({ visible: true });
  });

  test('should handle HIDE_MODAL', () => {
    expect(modal(undefined, { type: 'HIDE_MODAL' }))
      .toMatchObject({ visible: false });
  });

  test('should handle FILL_MODAL', () => {
    expect(modal(undefined, {
      type: 'FILL_MODAL', title: 't1', subtitle: 's2', content: 'blah',
    }))
      .toMatchObject({ title: 't1', subtitle: 's2', content: 'blah' });
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
