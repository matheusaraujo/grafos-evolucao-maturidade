const initialState = {
  nodes: [],
  edges: [],
};

const graph = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_GRAPH':
      return {
        ...state,
        ...action.graph,
      };
    default:
      return state;
  }
};

export default graph;
