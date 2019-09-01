import page from './page';

describe('page reducer', () => {
  test('should handle TOGGLE_CODE', () => {
    expect(page({ showCode: true }, { type: 'TOGGLE_CODE' }))
      .toEqual({ showCode: false });
    expect(page({ showCode: false }, { type: 'TOGGLE_CODE' }))
      .toEqual({ showCode: true });
  });

  test('should handle LOAD_PAGE', () => {
    expect(page({}, { type: 'LOAD_PAGE' }))
      .toEqual({ loaded: true });
  });

  test('should handle default', () => {
    expect(page(undefined, undefined))
      .toEqual({
        language: 'pt',
        showCode: true,
        loaded: false,
      });
  });
});
