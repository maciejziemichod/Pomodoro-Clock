import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { togglePlay } from "../actions";

const StartStop = () => {
  const isPlaying = useSelector((state) => state.togglePlay);
  const dispatch = useDispatch();
  return (
    <button
      className="button"
      id="start_stop"
      onClick={() => dispatch(togglePlay())}
    >
      {isPlaying ? "Stop" : "Start"}
    </button>
  );
};

export default StartStop;
