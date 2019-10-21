import nexts from './nexts';

describe('nexts reducer', () => {
  test('should handle SHOW_NEXTS', () => {
    expect(nexts(undefined, { type: 'SHOW_NEXTS' }))
      .toMatchObject({
        visible: true, calculated: false, calculating: false, options: [],
      });
  });
  test('should handle HIDE_NEXTS', () => {
    expect(nexts(undefined, { type: 'HIDE_NEXTS' }))
      .toMatchObject({
        visible: false, calculated: false, calculating: false, options: [],
      });
  });
  test('should handle BEGIN_CALC_NEXTS', () => {
    expect(nexts(undefined, { type: 'BEGIN_CALC_NEXTS' }))
      .toMatchObject({
        visible: true, calculated: false, calculating: true, options: [],
      });
  });
  test('should handle END_CALC_NEXTS', () => {
    expect(nexts(undefined, { type: 'END_CALC_NEXTS', options: [{ a: 1 }] }))
      .toMatchObject({
        visible: true, calculated: true, calculating: false, options: [{ a: 1 }],
      });
  });
  test('should handle default', () => {
    expect(nexts(undefined, undefined))
      .toMatchObject({
        visible: false, calculated: false, calculating: false, options: [],
      });
  });
});
