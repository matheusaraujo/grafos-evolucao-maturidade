import {
  getCombinationTotalWeight,
  getAllCombinations,
} from './utils';

describe('services - Nexts - util', () => {
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
  test('getAllCombinations - number', () => {
    expect(getAllCombinations([3, 4]))
      .toStrictEqual([[3], [4], [3, 4]]);
  });
  test('getAllCombinations - nodes', () => {
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
    expect(getAllCombinations([node3, node4]))
      .toStrictEqual([[node3], [node4], [node3, node4]]);
  });
});
