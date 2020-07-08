const sessionReducer = (state = 1500, action) => {
  switch (action.type) {
    case "DECREMENT_SESSION":
      return state - 1;
    default:
      return state;
  }
};

export default sessionReducer;
