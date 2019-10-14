import { getPending, isAllPrecedentsDone } from './getAvailableItems';

describe('engine - Nexts - getAvailableItems', () => {
  test('getPending should return empty', () => {
    expect(getPending()).toStrictEqual([]);
  });
  test('getPending should return one item', () => {
    expect(getPending([{
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
  test('getPending should return no item', () => {
    expect(getPending([{
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
});
