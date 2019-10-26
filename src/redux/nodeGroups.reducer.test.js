import nodeGroups from './nodeGroups.reducer';

const defaultNodeGroups = [{
  id: 1,
  label: 'Group Gray',
  color: '#757763',
},
{
  id: 2,
  label: 'Group Pink',
  color: '#fa7c91',
},
];

describe('nodeGroups reducer', () => {
  test('should handle UPDATE_NODE_GROUPS', () => {
    expect(nodeGroups(undefined, { type: 'UPDATE_NODE_GROUPS', nodeGroups: defaultNodeGroups }))
      .toEqual(defaultNodeGroups);
  });
  test('should handle default', () => {
    expect(nodeGroups(undefined, undefined))
      .toEqual([]);
  });
});
