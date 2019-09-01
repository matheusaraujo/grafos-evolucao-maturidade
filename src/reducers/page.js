const initialState = {
  showCode: true,
  loaded: false,
};

const page = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PAGE':
      return {
        ...state,
        loaded: true,
      };
    case 'TOGGLE_CODE':
      return {
        ...state,
        showCode: !state.showCode,
      };
    default:
      return state;
  }
};

export default page;
