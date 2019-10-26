const initialState = {
  hierarchical: false,
  hierarchicalDirection: 'R',
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
