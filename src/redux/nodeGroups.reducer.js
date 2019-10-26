const initialState = [];

const nodeGroups = (state = initialState, action = { type: 'default' }) => {
  if (action.type === 'UPDATE_NODE_GROUPS') {
    return action.nodeGroups;
  }
  return state;
};

export default nodeGroups;
