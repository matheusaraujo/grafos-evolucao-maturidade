export const beginCalcNexts = () => ({
  type: 'BEGIN_CALC_NEXTS',
});

export const endCalcNexts = (options) => ({
  type: 'END_CALC_NEXTS',
  options,
});
