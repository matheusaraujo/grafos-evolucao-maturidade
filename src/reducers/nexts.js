const initialState = {
  visible: false,
  calculating: false,
  calculated: false,
  options: [],
};

const nexts = (state = initialState, action = { type: 'default' }) => {
  switch (action.type) {
    case 'SHOW_NEXTS':
      return {
        ...state,
        visible: true,
        calculating: false,
        calculated: false,
      };
    case 'HIDE_NEXTS':
      return initialState;
    case 'BEGIN_CALC_NEXTS':
      return {
        ...state,
        visible: true,
        calculating: true,
      };
    case 'END_CALC_NEXTS':
      return {
        ...state,
        visible: true,
        calculating: false,
        calculated: true,
        options: action.options,
      };
    default:
      return state;
  }
};

export default nexts;
