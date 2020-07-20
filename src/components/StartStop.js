import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../actions";

const StartStop = () => {
  const isRunning = useSelector((state) => state.isRunning);
  const dispatch = useDispatch();

  const play = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M3 22v-20l18 10-18 10z" />
    </svg>
  );
  const stop = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" />
    </svg>
  );

  return (
    <button
      className="button"
      id="start_stop"
      onClick={() => dispatch(toggle())}
    >
      {isRunning ? stop : play}
    </button>
  );
};

export default StartStop;
