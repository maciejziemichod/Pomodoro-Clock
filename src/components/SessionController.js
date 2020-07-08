import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementSetSession, decrementSetSession } from "../actions";

const SessionController = () => {
  const sessionTime = useSelector((state) => state.setSession);
  const isRunning = useSelector((state) => state.togglePlay);
  const dispatch = useDispatch();

  const change = (type) => {
    if (type === "increment" && sessionTime < 60 && !isRunning) {
      dispatch(incrementSetSession());
    } else if (type === "decrement" && sessionTime > 1 && !isRunning) {
      dispatch(decrementSetSession());
    }
  };

  return (
    <div>
      <div className="controller__title" id="session-label">
        Session Length
      </div>
      <div className="controller__buttons">
        <button id="session-decrement" onClick={() => change("decrement")}>
          arrow down
        </button>
        <div id="session-length">{sessionTime}</div>
        <button id="session-increment" onClick={() => change("increment")}>
          arrow up
        </button>
      </div>
    </div>
  );
};

export default SessionController;
