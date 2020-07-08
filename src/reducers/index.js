import breakReducer from "./break";
import sessionReducer from "./session";
import togglePlayReducer from "./togglePlay";
import { combineReducers } from "redux";

export default combineReducers({
  break: breakReducer,
  session: sessionReducer,
  togglePlay: togglePlayReducer,
});
