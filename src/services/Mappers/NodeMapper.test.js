import { mapNodeDetails, getGroup } from './NodeMapper';

describe('nodeMapper', () => {
  test('getGroup empty', () => {
    expect(getGroup(undefined, undefined)).toStrictEqual(['', '']);
  });
  test('getGroup with group', () => {
    expect(getGroup(undefined, { label: 'a' }))
      .toStrictEqual(['**Grupo:** a  \n', '']);
  });
  test('getGroup with group and soubgroup', () => {
    expect(getGroup({ subGroupId: 1 },
      {
        label: 'a', subGroups: [{ id: 1, label: 'b' }],
      })).toStrictEqual(['**Grupo:** a  \n', '**Subgrupo:** b  \n']);
  });
  test('mapNodeDetails', () => {
    const node = {
      weight: 1,
      level: 1,
      groupId: 1,
      details: 'ddd',
      slots: [1, 2],
      status: 1,
    };
    const nodeGroups = [
      { id: 1, label: 'a' },
    ];
    const line1 = 'ddd  \n---  \n**Peso:** 1  \n**Nível:** 1  \n**Grupo:** a  \n';
    const line2 = '**Slots:** 1, 2  \n';
    const line3 = '**Status:** Concluído  \n';
    const received = mapNodeDetails(node, nodeGroups);
    expect(received).toBe(line1 + line2 + line3);
  });
});
