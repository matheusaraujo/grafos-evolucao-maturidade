import page from './page';

describe('page reducer', () => {
  test('should handle TOGGLE_CODE', () => {
    expect(page({ showCode: true }, { type: 'TOGGLE_CODE' }))
      .toEqual({ showCode: false });
    expect(page({ showCode: false }, { type: 'TOGGLE_CODE' }))
      .toEqual({ showCode: true });
  });

  test('should handle LOAD_PAGE', () => {
    expect(page(undefined, { type: 'LOAD_PAGE' }))
      .toMatchObject({ loaded: true });
  });

  test('should handle UNLOAD_PAGE', () => {
    expect(page(undefined, { type: 'UNLOAD_PAGE' }))
      .toMatchObject({ loaded: false });
  });

  test('should handle default', () => {
    expect(page(undefined, undefined))
      .toEqual({
        lang: 'pt',
        showCode: true,
        loaded: false,
      });
  });
});
