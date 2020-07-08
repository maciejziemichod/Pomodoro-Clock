const breakReducer = (state = 300, action) => {
  switch (action.type) {
    case "DECREMENT_BREAK":
      return state - 1;
    default:
      return state;
  }
};

export default breakReducer;
