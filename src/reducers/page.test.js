import page from './page';

describe('page reducer', () => {
  test('should handle default', () => {
    expect(page(undefined, undefined))
      .toEqual({
        lang: 'pt',
        mode: 'initial',
      });
  });
});
