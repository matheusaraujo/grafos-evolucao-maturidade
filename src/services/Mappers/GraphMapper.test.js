import {
  graphMapper,
  getNodeBorder,
  getEdgeColor,
  getNodeColor,
} from './GraphMapper';

describe('GraphMapper', () => {
  test('getNodeBorder - default', () => {
    expect(getNodeBorder(null)).toEqual('#00000055');
  });
  test('getNodeBorder - status = 0', () => {
    expect(getNodeBorder({ status: 0 })).toEqual('#ffffff');
  });
  test('getEdgeColor - nodeFrom.status = 0', () => {
    const graph = { nodes: [{ id: 0, status: 0 }, { id: 1 }] };
    const edge = { from: 0, to: 1 };
    expect(getEdgeColor(graph, edge)).toEqual('#00000033');
  });
  test('getEdgeColor - nodeTo.status = 0', () => {
    const graph = { nodes: [{ id: 0, status: 1 }, { id: 1, status: 0 }] };
    const edge = { from: 0, to: 1 };
    expect(getEdgeColor(graph, edge)).toEqual('#00000033');
  });
  test('getEdgeColor - nodeFrom.status and nodeTo.status != 0', () => {
    const graph = { nodes: [{ id: 0, status: 1 }, { id: 1, status: 1 }] };
    const edge = { from: 0, to: 1 };
    expect(getEdgeColor(graph, edge)).toEqual('#000000ff');
  });
  test('getNodeColor - no group', () => {
    const node = { status: 0 };
    expect(getNodeColor(node, undefined)).toEqual(undefined);
  });
  test('getNodeColor - status 0', () => {
    const node = { id: 1, groupId: 1, status: 0 };
    const groups = [{ id: 1, color: '#123456' }];
    expect(getNodeColor(node, groups)).toEqual('#12345633');
  });
  test('getNodeColor - status 1', () => {
    const node = { id: 1, groupId: 1, status: 1 };
    const groups = [{ id: 1, color: '#123456' }];
    expect(getNodeColor(node, groups)).toEqual('#123456ff');
  });
  test('getNodeColor - no group', () => {
    const node = { id: 1, groupId: 2, status: 1 };
    const groups = [{ id: 1, color: '#123456' }];
    expect(getNodeColor(node, groups)).toEqual(undefined);
  });
  test('graphMapper', () => {
    const graph = {
      nodes: [{
        id: 1,
        label: '1',
        title: 't1',
        level: 1,
        groupId: 1,
      },
      {
        id: 2,
        label: '2',
        title: 't2',
        level: 2,
        groupId: 1,
      }],
      edges: [{
        id: 1,
        from: 1,
        to: 2,
        title: 't1',
      }],
    };
    const nodeGroups = [{
      id: 1,
      color: '#123456',
    }];
    const expected = {
      edges: [
        {
          arrows: 'to',
          color: {
            color: '#000000ff',
          },
          from: 1,
          id: 1,
          title: undefined,
          to: 2,
        },
      ],
      nodes: [
        {
          color: {
            background: '#123456ff',
            border: '#00000055',
          },
          id: 1,
          label: '1',
          level: 1,
          shape: 'circle',
          title: 't1',
        },
        {
          color: {
            background: '#123456ff',
            border: '#00000055',
          },
          id: 2,
          label: '2',
          level: 2,
          shape: 'circle',
          title: 't2',
        },
      ],
    };
    const received = graphMapper(graph, nodeGroups);
    expect(received).toStrictEqual(expected);
  });
});
