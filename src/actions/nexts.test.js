import * as actions from './nexts';

describe('actions nexts', () => {
  test('calcNexts should create CALC_NEXTS action', () => {
    expect(actions.beginCalcNexts())
      .toEqual({ type: 'BEGIN_CALC_NEXTS' });
  });
  test('endCalcNexts should create END_CALC_NEXTS action', () => {
    expect(actions.endCalcNexts({ a: 'a' }))
      .toEqual({ type: 'END_CALC_NEXTS', options: { a: 'a' } });
  });
});
