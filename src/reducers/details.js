const initialState = {
  show: false,
  content: '',
};

const details = (state = initialState, action = { type: 'default' }) => {
  switch (action.type) {
    case 'SHOW_DETAILS':
      return {
        ...state,
        show: true,
      };
    case 'HIDE_DETAILS':
      return {
        ...state,
        show: false,
      };
    case 'SET_DETAILS':
      return {
        ...state,
        content: action.content,
      };
    default:
      return state;
  }
};

export default details;
