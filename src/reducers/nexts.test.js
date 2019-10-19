import nexts from './nexts';

describe('nexts reducer', () => {
  test('should handle BEGIN_CALC_NEXTS', () => {
    expect(nexts(undefined, { type: 'BEGIN_CALC_NEXTS' }))
      .toMatchObject({ calculated: false, calculating: true, options: [] });
  });
  test('should handle END_CALC_NEXTS', () => {
    expect(nexts(undefined, { type: 'END_CALC_NEXTS', options: [{ a: 1 }] }))
      .toMatchObject({ calculated: true, calculating: false, options: [{ a: 1 }] });
  });
  test('should handle HIDE_NEXTS', () => {
    expect(nexts(undefined, { type: 'HIDE_NEXTS' }))
      .toMatchObject({ calculated: false, calculating: false, options: [] });
  });
  test('should handle default', () => {
    expect(nexts(undefined, undefined))
      .toMatchObject({ calculated: false, calculating: false, options: [] });
  });
});
