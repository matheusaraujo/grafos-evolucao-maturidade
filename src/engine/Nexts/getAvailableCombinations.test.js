import {
  filterMinimumWeightCombination,
  filterMaximumWeightCombination,
  areConflictingNodes,
  isConflictingCombination,
  filterConflictingCombinations,
} from './getAvailableCombinations';

describe('engine - Nexts - getAvailableCombinations', () => {
  test('filterMinimumWeightCombination - accepted', () => {
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
    expect(filterMinimumWeightCombination([[node3, node4]], 3))
      .toStrictEqual([[node3, node4]]);
  });
  test('filterMinimumWeightCombination - not accepted', () => {
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
    expect(filterMinimumWeightCombination([[node3, node4]], 5))
      .toStrictEqual([]);
  });
  test('filterMaximumWeightCombination - not accepted', () => {
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
    expect(filterMaximumWeightCombination([[node3, node4]], 3))
      .toStrictEqual([]);
  });
  test('filterMaximumWeightCombination - accepted', () => {
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
    expect(filterMaximumWeightCombination([[node3, node4]], 5))
      .toStrictEqual([[node3, node4]]);
  });
  test('areConflictingNodes - no conflict', () => {
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      weight: 2,
      slots: [1, 2],
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      slots: [3, 4],
    };
    expect(areConflictingNodes(node3, node4)).toBeFalsy();
  });
  test('areConflictingNodes - conflict', () => {
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      weight: 2,
      slots: [1, 2],
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      slots: [2, 3, 4],
    };
    expect(areConflictingNodes(node3, node4)).toBeTruthy();
  });
  test('isConflictingCombination - no conflict', () => {
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      weight: 2,
      slots: [1, 2],
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      slots: [3, 4],
    };
    expect(isConflictingCombination([node3, node4])).toBeFalsy();
  });
  test('isConflictingCombination - conflict', () => {
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      weight: 2,
      slots: [1, 2],
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      slots: [2, 3, 4],
    };
    expect(isConflictingCombination([node3, node4])).toBeTruthy();
  });
  test('filterConflictingCombinations - no conflict', () => {
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      weight: 2,
      slots: [1, 2],
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      slots: [3, 4],
    };
    expect(filterConflictingCombinations([[node3, node4]]))
      .toStrictEqual([[node3, node4]]);
  });
  test('filterConflictingCombinations - conflict', () => {
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      weight: 2,
      slots: [1, 2],
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      slots: [2, 3, 4],
    };
    expect(filterConflictingCombinations([[node3, node4]]))
      .toStrictEqual([]);
  });
});
