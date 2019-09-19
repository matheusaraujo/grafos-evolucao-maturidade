const initialState = {
  lang: 'pt',
  mode: 'initial',
};

const page = (state = initialState, action = { type: 'default' }) => {
  switch (action.type) {
    case 'INIT_APP':
      return {
        ...state,
        mode: 'initial',
      };
    case 'VIEW_GRAPH':
      return {
        ...state,
        mode: 'viewing',
      };
    case 'EDIT_NODES':
      return {
        ...state,
        mode: 'editing_nodes',
      };
    case 'EDIT_NODES_GROUPS':
      return {
        ...state,
        mode: 'editing_nodes_groups',
      };
    case 'EDIT_EDGES':
      return {
        ...state,
        mode: 'editing_edges',
      };
    case 'EDIT_OPTIONS':
      return {
        ...state,
        mode: 'editing_options',
      };
    default:
      return state;
  }
};

export default page;
