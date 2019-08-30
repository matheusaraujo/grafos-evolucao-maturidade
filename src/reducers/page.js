const page = (state = { graph: undefined }, action) => {
  switch (action.type) {
    case 'INIT':
      return {
        graph: undefined,
      };
    case 'APPLY':      
      return {
        ...state,
        graph: action.graph,
      };
    default:
      return state;
  }
};

export default page;
