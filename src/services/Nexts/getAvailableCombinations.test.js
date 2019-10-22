import {
  filterMinimumWeightCombination,
  filterMaximumWeightCombination,
  areConflictingNodes,
  isConflictingCombination,
  filterConflictingCombinations,
  containsMinimumLevel,
  filterMaximumDistanceCombination,
  filterMinimumLevel,
} from './getAvailableCombinations';

describe('services - Nexts - getAvailableCombinations', () => {
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
  test('filterMaximumDistanceCombination - defined', () => {
    const options = [
      { distance: 1 },
      { distance: 2 },
      { distance: 3 },
    ];
    const expected = [{ distance: 1 }, { distance: 2 }];
    const received = filterMaximumDistanceCombination(options, 2);
    expect(received).toStrictEqual(expected);
  });
  test('filterMaximumDistanceCombination - undefined', () => {
    const options = [
      { distance: 1 },
      { distance: 2 },
      { distance: 3 },
    ];
    const expected = [{ distance: 1 }, { distance: 2 }, { distance: 3 }];
    const received = filterMaximumDistanceCombination(options);
    expect(received).toStrictEqual(expected);
  });
  test('containsMinimumLevel - true', () => {
    expect(containsMinimumLevel([{ id: 1, level: 1 }], 1)).toBeTruthy();
  });
  test('containsMinimumLevel - false', () => {
    expect(containsMinimumLevel([{ id: 1, level: 2 }], 1)).toBeFalsy();
  });
  test('filterMinimumLevel', () => {
    const options = [
      { combination: [{ level: 1 }, { level: 2 }], minimumLevel: 1 },
      { combination: [{ level: 2 }, { level: 2 }], minimumLevel: 1 },
    ];

    const expected = [
      { combination: [{ level: 1 }, { level: 2 }], minimumLevel: 1 },
    ];

    const received = filterMinimumLevel(options);
    expect(received).toStrictEqual(expected);
  });
});
