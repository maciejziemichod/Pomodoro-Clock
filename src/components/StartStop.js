import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, resetReset } from "../actions";

const StartStop = () => {
  const isRunning = useSelector((state) => state.isRunning);
  const dispatch = useDispatch();

  return (
    <button
      className="button"
      id="start_stop"
      onClick={() => {
        dispatch(toggle());
        dispatch(resetReset());
      }}
    >
      {isRunning ? "Stop" : "Start"}
    </button>
  );
};

export default StartStop;
