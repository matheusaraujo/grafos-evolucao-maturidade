import { getNodeBorder } from './GraphMapper';

describe('GraphMapper', () => {
  test('getNodeBorder - default', () => {
    expect(getNodeBorder(null)).toEqual('#00000055');
  });
});
