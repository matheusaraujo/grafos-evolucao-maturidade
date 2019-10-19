const initialState = {
  calculated: false,
  calculating: false,
  options: [],
};

const nexts = (state = initialState, action = { type: 'default' }) => {
  switch (action.type) {
    case 'BEGIN_CALC_NEXTS':
      return {
        ...state,
        calculating: true,
      };
    case 'END_CALC_NEXTS':
      return {
        ...state,
        calculating: false,
        calculated: true,
        options: action.options,
      };
    default:
      return state;
  }
};

export default nexts;
