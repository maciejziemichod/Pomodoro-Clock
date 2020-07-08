import { createStore } from "redux";

const turn = (state = "SESSION", action) => {
  switch (action.type) {
    case "SESSION":
      return "SESSION";
    case "BREAK":
      return "BREAK";
    default:
      return state;
  }
};

export default turn;
