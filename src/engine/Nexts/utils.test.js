import getCombinationTotalWeight from './utils';

describe('engine - Nexts - util', () => {
  test('getCombinationTotalWeight - filled', () => {
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      weight: 2,
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      weight: 2,
    };
    expect(getCombinationTotalWeight([node3, node4])).toBe(4);
  });
  test('getCombinationTotalWeight - empty', () => {
    expect(getCombinationTotalWeight([])).toBe(0);
  });
});
