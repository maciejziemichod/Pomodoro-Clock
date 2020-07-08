const breakReducer = (state = 300, action) => {
  switch (action.type) {
    case "INCREMENT_BREAK":
      return state + action.payload;
    case "DECREMENT_BREAK":
      return state - action.payload;
    default:
      return state;
  }
};

export default breakReducer;
