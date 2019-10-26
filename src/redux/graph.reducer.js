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
    case 'UPDATE_EDGES':
      return {
        ...state,
        edges: action.edges,
      };
    case 'UPDATE_NODE_STATUS':
      return {
        ...state,
        nodes: state.nodes.map((n) => (
          n.id !== action.id ? n : { ...n, status: action.status, temp: action.temp })),
      };
    default:
      return state;
  }
};

export default graph;
