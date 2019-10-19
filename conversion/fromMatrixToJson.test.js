import {
  getGroups,
  getNodes,
  getEdges,
  fromMatrixToJson
} from './fromMatrixToJson';

describe('conversion', () => {
  const matrix = [
    ['Código', 'Nome da Atividade Acadêmica', 'Pré Requisitos', 'CH', 'Período', 'Tipo', 'Ciclo_Geral', 'Ciclo_Detalhe', 'Ementa', 'Horários', 'Concluído'],
    ['DCC203', 'PROGRAMAÇÃO E DESENVOLVIMENTO DE SOFTWARE I', 'NA', '60', '1', 'OB', 'OB', 'OB', 'Ementa', '4,7', '1'],
    ['DCC033', 'ANALISE NUMERICA', 'DCC203', '60', '2', 'OB', 'OB', 'OB', 'Ementa', '3,8', '1'],
  ];
  test('getGroups', () => {
    const received = getGroups(matrix);
    const expected = [{
      color: '#AC92EB',
      id: 1,
      label: 'OB',
      subGroups: [{
        id: 1,
        label: 'OB',
      }],
    }];
    expect(received).toStrictEqual(expected);
  });
  test('getNodes', () => {
    const groups = getGroups(matrix);
    const received = getNodes(matrix, groups);
    const expected = [{
      details: 'Ementa',
      groupId: 1,
      id: 1,
      label: 'DCC203',
      level: 1,
      slots: [4, 7],
      status: 1,
      subGroupId: 1,
      title: 'PROGRAMAÇÃO E DESENVOLVIMENTO DE SOFTWARE I',
      weight: 60,
    }, {
      details: 'Ementa',
      groupId: 1,
      id: 2,
      label:
        'DCC033',
      level: 2,
      slots: [3, 8],
      status: 1,
      subGroupId: 1,
      title: 'ANALISE NUMERICA',
      weight: 60,
    }];
    expect(received).toStrictEqual(expected);
  });
  test('getEdges', () => {
    const groups = getGroups(matrix);
    const nodes = getNodes(matrix, groups);
    const received = getEdges(matrix, nodes);
    const expected = [{
      from: 1,
      id: 1,
      label: 'DCC203 -> DCC033',
      to: 2,
    }];
    expect(received).toStrictEqual(expected);
  });
  test('fromMatrixToJson', () => {
    const received = fromMatrixToJson(matrix);
    const expected = {
      edges: [
        {
          from: 1,
          id: 1,
          label: 'DCC203 -> DCC033',
          to: 2,
        },
      ],
      groups: [
        {
          color: '#AC92EB',
          id: 1,
          label: 'OB',
          subGroups: [
            {
              id: 1,
              label: 'OB',
            }],
        }],
      nodes: [
        {
          details: 'Ementa',
          groupId: 1,
          id: 1,
          label: 'DCC203',
          level: 1,
          slots: [4, 7],
          status: 1,
          subGroupId: 1,
          title: 'PROGRAMAÇÃO E DESENVOLVIMENTO DE SOFTWARE I',
          weight: 60,
        },
        {
          details: 'Ementa',
          groupId: 1,
          id: 2,
          label: 'DCC033',
          level: 2,
          slots: [3, 8],
          status: 1,
          subGroupId: 1,
          title: 'ANALISE NUMERICA',
          weight: 60,
        },
      ],
    };
    expect(received).toStrictEqual(expected);
  });
});
