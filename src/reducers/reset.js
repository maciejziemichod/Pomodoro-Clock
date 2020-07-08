// That's just for Timer to react in every situation to reset button

const reset = (state = false, action) => {
  switch (action.type) {
    case "RESET":
      return true;
    case "RESET_RESET":
      return false;
    default:
      return state;
  }
};

export default reset;
