import {
  getMinimumUndoneLevel,
  getCombinationDistance,
  classifyCombination,
  getAllSlots,
} from './classifyCombinations';

describe('engine - Nexts - classifyCombinations', () => {
  test('getMinimumUndoneLevel - exist minimum level', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
      level: 1,
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 0,
      level: 2,
    };
    expect(getMinimumUndoneLevel([node1, node2])).toBe(2);
  });
  test('getMinimumUndoneLevel - exist minimum level', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
      level: 1,
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 1,
      level: 2,
    };
    expect(getMinimumUndoneLevel([node1, node2])).toBe(-1);
  });
  test('getCombinationDistance - case 1, distance 1', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
      level: 1,
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 1,
      level: 1,
    };
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      level: 1,
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      level: 2,
    };
    const node5 = {
      id: 5,
      label: '5',
      status: 0,
      level: 2,
    };
    expect(getCombinationDistance([node3, node4],
      [node1, node2, node3, node4, node5])).toBe(1);
  });
  test('getCombinationDistance - case 2, distance 0', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
      level: 1,
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 1,
      level: 1,
    };
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      level: 1,
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      level: 2,
    };
    const node5 = {
      id: 5,
      label: '5',
      status: 0,
      level: 2,
    };
    expect(getCombinationDistance([node3],
      [node1, node2, node3, node4, node5])).toBe(0);
  });
  test('getCombinationDistance - case 3, distance 1', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
      level: 1,
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 1,
      level: 1,
    };
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      level: 1,
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      level: 2,
    };
    const node5 = {
      id: 5,
      label: '5',
      status: 0,
      level: 2,
    };
    expect(getCombinationDistance([node4],
      [node1, node2, node3, node4, node5])).toBe(1);
  });
  test('getAllSlots', () => {
    const node1 = {
      slots: [5, 6],
    };
    const node2 = {
      slots: [1, 2],
    };
    const node3 = {
      slots: [3, 4],
    };
    expect(getAllSlots([node1, node2, node3])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
  test('classifyCombination - case 1', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
      level: 1,
      weight: 2,
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 1,
      level: 1,
      weight: 2,
    };
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      level: 1,
      weight: 2,
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      level: 2,
      weight: 2,
    };
    const node5 = {
      id: 5,
      label: '5',
      status: 0,
      level: 2,
      weight: 2,
    };
    const expected = {
      combination: [node3, node4],
      distance: 1,
      totalWeight: 4,
      slots: [],
    };
    const received = classifyCombination([node3, node4],
      [node1, node2, node3, node4, node5]);
    expect(received).toStrictEqual(expected);
  });
  test('classifyCombination - case 2', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
      level: 1,
      weight: 2,
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 1,
      level: 1,
      weight: 2,
    };
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      level: 1,
      weight: 2,
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      level: 2,
      weight: 2,
    };
    const node5 = {
      id: 5,
      label: '5',
      status: 0,
      level: 2,
      weight: 2,
    };
    const expected = {
      combination: [node3],
      distance: 0,
      totalWeight: 2,
      slots: [],
    };
    expect(
      classifyCombination([node3],
        [node1, node2, node3, node4, node5]),
    ).toStrictEqual(expected);
  });
  test('classifyCombination - case 3', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
      level: 1,
      weight: 2,
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 1,
      level: 1,
      weight: 2,
    };
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      level: 1,
      weight: 2,
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      level: 2,
      weight: 2,
    };
    const node5 = {
      id: 5,
      label: '5',
      status: 0,
      level: 2,
      weight: 2,
    };
    const expected = {
      combination: [node4],
      distance: 1,
      totalWeight: 2,
      slots: [],
    };
    expect(
      classifyCombination([node4],
        [node1, node2, node3, node4, node5]),
    ).toStrictEqual(expected);
  });
});
