const initialState = {
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

const options = (state = initialState, action = { type: 'default' }) => {
  if (action.type === 'UPDATE_OPTIONS') {
    return {
      ...state,
      ...action.options,
    };
  }
  return state;
};

export default options;
