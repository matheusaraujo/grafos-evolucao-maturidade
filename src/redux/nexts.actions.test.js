import * as actions from './nexts.actions';

describe('actions nexts', () => {
  test('showNexts should create SHOW_NEXTS action', () => {
    expect(actions.showNexts())
      .toStrictEqual({ type: 'SHOW_NEXTS' });
  });
  test('hideNexts should create HIDE_NEXTS action', () => {
    expect(actions.hideNexts())
      .toStrictEqual({ type: 'HIDE_NEXTS' });
  });
  test('calcNexts should create CALC_NEXTS action', () => {
    expect(actions.beginCalcNexts())
      .toStrictEqual({ type: 'BEGIN_CALC_NEXTS' });
  });
  test('endCalcNexts should create END_CALC_NEXTS action', () => {
    expect(actions.endCalcNexts({ a: 'a' }))
      .toStrictEqual({ type: 'END_CALC_NEXTS', options: { a: 'a' } });
  });
});
