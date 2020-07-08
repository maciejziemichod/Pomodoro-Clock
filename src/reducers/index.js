import breakReducer from "./break";
import sessionReducer from "./session";
import togglePlayReducer from "./togglePlay";
import setBreakReducer from "./setBreak";
import setSessionReducer from "./setSession";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  break: breakReducer,
  setBreak: setBreakReducer,
  session: sessionReducer,
  setSession: setSessionReducer,
  togglePlay: togglePlayReducer,
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
