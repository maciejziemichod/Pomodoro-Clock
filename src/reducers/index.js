import isRunning from "./isRunning";
import breakTime from "./breakTime";
import sessionTime from "./sessionTime";
import turn from "./turn";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  breakTime,
  sessionTime,
  isRunning,
  turn,
});

// It lets reset the state. When I give state of undefined, reducers use their default state
const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    // It changes the reference, not mutates the state
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
