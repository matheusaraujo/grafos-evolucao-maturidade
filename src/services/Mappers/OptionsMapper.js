export const getDirection = (d) => {
  if (d.toUpperCase() === 'R') return 'LR';
  if (d.toUpperCase() === 'L') return 'RL';
  if (d.toUpperCase() === 'U') return 'DU';
  if (d.toUpperCase() === 'D') return 'UD';
  return 'LR';
};

const layoutHierarchical = (options) => ({
  hierarchical: {
    enabled: true,
    direction: getDirection(options.hierarchicalDirection),
  },
});

const smoothEdges = () => ({
  smooth: {
    enabled: true,
  },
});

const physics = {
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
};

export const mapOptions = (options) => {
  const result = {
    height: '500px',
    interaction: {
      hover: true,
      hoverConnectedEdges: true,
      selectConnectedEdges: false,
    },
  };

  if (options.hierarchical === true) {
    result.layout = layoutHierarchical(options);
  }

  if (options.smoothEdge === true) {
    result.edges = smoothEdges();
  }

  if (options.animation === false) {
    result.physics = physics;
  }

  return result;
};
