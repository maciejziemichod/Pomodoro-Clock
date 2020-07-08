import React from "react";
import { decrementSession, incrementSession } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const SessionController = () => {
  const sessionTime = useSelector((state) => state.sessionTime);
  const isRunning = useSelector((state) => state.isRunning);
  const dispatch = useDispatch();

  // Securing that session won't be less than 1 and bigger than 60
  // and that you can't change it when timer is running
  const change = (type) => {
    if (type === "INCREMENT" && sessionTime < 60 && !isRunning) {
      dispatch(incrementSession());
    } else if (type === "DECREMENT" && sessionTime > 1 && !isRunning) {
      dispatch(decrementSession());
    }
  };

  return (
    <div>
      <div className="controller__title" id="session-label">
        Session Length
      </div>
      <div className="controller__buttons">
        <button id="session-decrement" onClick={() => change("DECREMENT")}>
          arrow down
        </button>
        <div id="session-length">{sessionTime}</div>
        <button id="session-increment" onClick={() => change("INCREMENT")}>
          arrow up
        </button>
      </div>
    </div>
  );
};

export default SessionController;
