const setSessionReducer = (state = 25, action) => {
  switch (action.type) {
    case "INCREMENT_SET_SESSION":
      return state + 1;
    case "DECREMENT_SET_SESSION":
      return state - 1;
    default:
      return state;
  }
};

export default setSessionReducer;
