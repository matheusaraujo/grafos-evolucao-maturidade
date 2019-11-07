import { mapOptions, getDirection } from './OptionsMapper';

describe('optionsMapper', () => {
  test('getDirection', () => {
    expect(getDirection('R')).toBe('LR');
    expect(getDirection('L')).toBe('RL');
    expect(getDirection('u')).toBe('DU');
    expect(getDirection('d')).toBe('UD');
    expect(getDirection('X')).toBe('LR');
  });
  test('mapOptions - hierarchical', () => {
    const input = {
      hierarchical: true,
      hierarchicalDirection: 'R',
    };

    const expected = {
      layout: {
        hierarchical: {
          enabled: true,
          direction: 'LR',
        },
      },
      height: '500px',
      interaction: {
        hover: true,
        hoverConnectedEdges: true,
        selectConnectedEdges: false,
      },
    };

    const received = mapOptions(input);
    expect(received).toStrictEqual(expected);
  });
  test('mapOptions - not hierarchical', () => {
    const input = {
      hierarchical: false,
    };

    const expected = {
      height: '500px',
      interaction: {
        hover: true,
        hoverConnectedEdges: true,
        selectConnectedEdges: false,
      },
    };

    const received = mapOptions(input);
    expect(received).toStrictEqual(expected);
  });
  test('mapOptions - smoothEdges', () => {
    const input = {
      smoothEdges: true,
    };

    const expected = {
      height: '500px',
      interaction: {
        hover: true,
        hoverConnectedEdges: true,
        selectConnectedEdges: false,
      },
      edges: {
        smooth: {
          enabled: true,
        },
      },
    };

    const received = mapOptions(input);
    expect(received).toStrictEqual(expected);
  });
  test('mapOptions - smoothEdges', () => {
    const input = {
      animation: false,
    };

    const expected = {
      height: '500px',
      interaction: {
        hover: true,
        hoverConnectedEdges: true,
        selectConnectedEdges: false,
      },
      physics: {
        stabilization: {
          enabled: true,
        },
        barnesHut: {
          gravitationalConstant: -23000,
          centralGravity: 0,
          springLength: 0,
          springConstant: 0.5,
          damping: 1,
          avoidOverlap: 1,
        },
      },
    };
    const received = mapOptions(input);
    expect(received).toStrictEqual(expected);
  });
});
