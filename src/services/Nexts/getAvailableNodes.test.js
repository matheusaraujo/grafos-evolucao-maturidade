import {
  filterPending,
  isAllPrecedentsDone,
  filterAllPrecedentsDone,
} from './getAvailableNodes';

describe('services - Nexts - getAvailableNodes', () => {
  test('filterPending should return empty', () => {
    expect(filterPending()).toStrictEqual([]);
  });
  test('filterPending should return one item', () => {
    expect(filterPending([{
      id: 1,
      label: '1',
      status: 0,
    },
    {
      id: 2,
      label: '2',
      status: 1,
    },
    ])).toStrictEqual([{
      id: 1,
      label: '1',
      status: 0,
    }]);
  });
  test('filterPending should return no item', () => {
    expect(filterPending([{
      id: 1,
      label: '1',
      status: 1,
    },
    {
      id: 2,
      label: '2',
      status: 1,
    },
    ])).toStrictEqual([]);
  });
  test('isAllPrecedentsDone empty', () => {
    expect(isAllPrecedentsDone()).toBeFalsy();
  });
  test('isAllPrecedentsDone no node', () => {
    expect(isAllPrecedentsDone(1, [{
      id: 2,
      label: '2',
    }], [])).toBeFalsy();
  });
  test('isAllPrecedentsDone no edges', () => {
    expect(isAllPrecedentsDone(1, [{
      id: 1,
      label: '1',
      status: 0,
    },
    ], [])).toBeTruthy();
  });
  test('isAllPrecedentsDone no precedents', () => {
    expect(isAllPrecedentsDone(1, [{
      id: 1,
      label: '1',
      status: 0,
    },
    {
      id: 2,
      label: '2',
      status: 0,
    },
    ], [{
      id: 1,
      from: 1,
      to: 2,
    }])).toBeTruthy();
  });
  test('isAllPrecedentsDone false', () => {
    expect(isAllPrecedentsDone(2, [{
      id: 1,
      label: '1',
      status: 0,
    },
    {
      id: 2,
      label: '2',
      status: 0,
    },
    ], [{
      id: 1,
      from: 1,
      to: 2,
    }])).toBeFalsy();
  });
  test('isAllPrecedentsDone true', () => {
    expect(isAllPrecedentsDone(2, [{
      id: 1,
      label: '1',
      status: 1,
    },
    {
      id: 2,
      label: '2',
      status: 0,
    },
    ], [{
      id: 1,
      from: 1,
      to: 2,
    }])).toBeTruthy();
  });
  test('filterAllPrecedentsDone', () => {
    const node1 = {
      id: 1,
      label: '1',
      status: 1,
    };
    const node2 = {
      id: 2,
      label: '2',
      status: 1,
    };
    const node3 = {
      id: 3,
      label: '3',
      status: 0,
    };
    const node4 = {
      id: 4,
      label: '4',
      status: 0,
    };
    const node5 = {
      id: 5,
      label: '5',
      status: 0,
    };
    expect(filterAllPrecedentsDone([
      node1, node2, node3, node4, node5,
    ], [{
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
    }])).toStrictEqual([
      node1, node2, node3, node4,
    ]);
  });
});
