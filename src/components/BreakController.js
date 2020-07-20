import React from "react";
import { decrementBreak, incrementBreak } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const BreakController = () => {
  const breakTime = useSelector((state) => state.breakTime);
  const isRunning = useSelector((state) => state.isRunning);
  const dispatch = useDispatch();

  // Securing that break won't be less than 1 and bigger than 60
  // and that you can't change it when timer is running
  const change = (type) => {
    if (type === "INCREMENT" && breakTime < 60 && !isRunning) {
      dispatch(incrementBreak());
    } else if (type === "DECREMENT" && breakTime > 1 && !isRunning) {
      dispatch(decrementBreak());
    }
  };

  return (
    <div className="controller__card">
      <div className="controller__title" id="break-label">
        Break Length
      </div>
      <div className="controller__buttons">
        <button
          className="button"
          id="break-decrement"
          onClick={() => change("DECREMENT")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg>
        </button>
        <div id="break-length">{breakTime}</div>
        <button
          className="button"
          id="break-increment"
          onClick={() => change("INCREMENT")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BreakController;
