const sessionReducer = (state = 1500, action) => {
  switch (action.type) {
    case "INCREMENT_SESSION":
      return state + action.payload;
    case "DECREMENT_SESSION":
      return state - action.payload;
    default:
      return state;
  }
};

export default sessionReducer;
