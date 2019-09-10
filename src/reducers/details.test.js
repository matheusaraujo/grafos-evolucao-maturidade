import details from './details';

describe('details reducer', () => {
  test('should handle SHOW_DETAILS', () => {
    expect(details(undefined, { type: 'SHOW_DETAILS' }))
      .toMatchObject({ show: true });
  });

  test('should handle HIDE_DEATAILS', () => {
    expect(details(undefined, { type: 'HIDE_DETAILS' }))
      .toMatchObject({ show: false });
  });

  test('should handle SET_DETAILS', () => {
    expect(details(undefined, { type: 'SET_DETAILS', content: 'blah' }))
      .toMatchObject({ content: 'blah' });
  });

  test('should handle default', () => {
    expect(details(undefined, undefined))
      .toEqual({
        show: false,
        content: '',
      });
  });
});
