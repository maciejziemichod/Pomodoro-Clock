import React from "react";
import { incrementSetBreak, decrementSetBreak } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const BreakController = () => {
  const breakTime = useSelector((state) => state.setBreak);
  const isRunning = useSelector((state) => state.togglePlay);
  const dispatch = useDispatch();

  const change = (type) => {
    if (type === "increment" && breakTime < 60 && !isRunning) {
      dispatch(incrementSetBreak());
    } else if (type === "decrement" && breakTime > 1 && !isRunning) {
      dispatch(decrementSetBreak());
    }
  };

  return (
    <div>
      <div className="controller__title" id="break-label">
        Break Length
      </div>
      <div className="controller__buttons">
        <button id="break-decrement" onClick={() => change("decrement")}>
          arrow down
        </button>
        <div id="break-length">{breakTime}</div>
        <button id="break-increment" onClick={() => change("increment")}>
          arrow up
        </button>
      </div>
    </div>
  );
};

export default BreakController;
