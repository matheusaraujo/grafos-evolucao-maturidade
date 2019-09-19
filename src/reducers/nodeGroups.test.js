import nodeGroups from './nodeGroups';

import { defaultNodeGroups } from '../commons/consts';

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
