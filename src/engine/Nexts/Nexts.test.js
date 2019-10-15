import Nexts from './Nexts';

describe('engine - Nexts', () => {
  test('Nexts should return empty', () => {
    expect(Nexts([], [], {})).toStrictEqual([]);
  });
  test('Nexts - case 1', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
      level: 1,
      weight: 2,
      slots: [1, 2],
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 1,
      level: 1,
      weight: 2,
      slots: [3, 4],
    };
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
      level: 1,
      weight: 2,
      slots: [5, 6],
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
      level: 2,
      weight: 2,
      slots: [1, 2],
    };
    const node5 = {
      id: 5,
      label: '5',
      status: 0,
      level: 2,
      weight: 2,
      slots: [3, 4],
    };
    const edges = [{
      id: 1,
      from: 1,
      to: 4,
    },
    {
      id: 2,
      from: 2,
      to: 4,
    },
    {
      id: 3,
      from: 2,
      to: 5,
    },
    {
      id: 4,
      from: 3,
      to: 5,
    }];
    const expected = [
      { combination: [node3], distance: 0, totalWeight: 2 },
      { combination: [node3, node4], distance: 1, totalWeight: 4 },
      { combination: [node4], distance: 1, totalWeight: 2 },
    ];
    expect(Nexts(
      [node1, node2, node3, node4, node5],
      edges,
      { minWeight: 2, maxWeight: 4 },
    )).toStrictEqual(expected);
  });
});
