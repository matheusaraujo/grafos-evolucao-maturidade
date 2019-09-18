const initialState = {
  lang: 'pt',
  loaded: false,
  nodeEdition: false,
};

const page = (state = initialState, action = { type: 'default' }) => {
  switch (action.type) {
    case 'LOAD_PAGE':
      return {
        ...state,
        loaded: true,
      };
    case 'UNLOAD_PAGE':
      return {
        ...state,
        loaded: false,
      };
    case 'BEGIN_NODE_EDITION':
      return {
        ...state,
        nodeEdition: true,
      };
    case 'END_NODE_EDITION':
      return {
        ...state,
        nodeEdition: false,
      };
    default:
      return state;
  }
};

export default page;
