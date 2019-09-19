const initialState = {
  nodes: [],
  edges: [],
};

const graph = (state = initialState, action = { type: 'default' }) => {
  switch (action.type) {
    case 'UPDATE_GRAPH':
      return {
        ...state,
        ...action.graph,
      };
    case 'UPDATE_NODES':
      return {
        ...state,
        nodes: action.nodes,
      };
    default:
      return state;
  }
};

export default graph;
