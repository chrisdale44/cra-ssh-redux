export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NAV:
      return {
        ...state,
        open: true
      };
    case CLOSE_NAV:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};
