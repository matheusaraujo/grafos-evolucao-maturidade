const initialState = {
  visible: false,
  title: undefined,
  subtitle: undefined,
  content: undefined,
};

const modal = (state = initialState, action = { type: 'default' }) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        visible: true,
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        visible: false,
      };
    case 'FILL_MODAL':
      return {
        ...state,
        title: action.title,
        subtitle: action.subtitle,
        content: action.content,
      };
    default:
      return state;
  }
};

export default modal;
