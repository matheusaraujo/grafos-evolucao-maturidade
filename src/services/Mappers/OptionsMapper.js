export const getDirection = (d) => {
  if (d.toUpperCase() === 'R') return 'LR';
  if (d.toUpperCase() === 'L') return 'RL';
  if (d.toUpperCase() === 'U') return 'DU';
  if (d.toUpperCase() === 'D') return 'UD';
  return 'LR';
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

  if (options.hierarchical && options.hierarchical === true) {
    result.layout = {
      hierarchical: {
        enabled: true,
        direction: getDirection(options.hierarchicalDirection),
      },
    };
  }
  return result;
};
