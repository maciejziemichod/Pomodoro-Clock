const setBreakReducer = (state = 5, action) => {
  switch (action.type) {
    case "INCREMENT_SET_BREAK":
      return state + 1;
    case "DECREMENT_SET_BREAK":
      return state - 1;
    default:
      return state;
  }
};

export default setBreakReducer;
