import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementSession, decrementBreak } from "../actions";

const Timer = () => {
  const sessionTime = useSelector((state) => state.session);
  const breakTime = useSelector((state) => state.break);
  const setSessionTime = useSelector((state) => state.setSession);
  const setBreakTime = useSelector((state) => state.setBreak);
  let time = calcTime(sessionTime);
  const shouldRun = useSelector((state) => state.togglePlay);
  const dispatch = useDispatch();
  let display = "Session";

  
  if (sessionTime === 0) {
    dispatch({ type: "INCREMENT_SESSION" });
    setTimeout(() => {

      
      display = "Break";
      time = calcTime(breakTime);
    }, 1000);
  }

  useEffect(() => {
    if (shouldRun && sessionTime !== 0 && display === "Session") {
      const interval = setInterval(() => {
        dispatch(decrementSession());
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  });

  return (
    <div className="timer">
      <div id="timer-label">{display}</div>
      <div id="time-left">{time}</div>
    </div>
  );
};

const calcTime = (seconds) => {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  const addZeros = (time) => {
    let newTime = time;
    if (time === 0) {
      newTime = "00";
    } else if (Math.floor(time / 10) < 1) {
      newTime = "0" + time;
    }
    return newTime;
  };

  sec = addZeros(sec);
  min = addZeros(min);

  return `${min}:${sec}`;
};

export default Timer;
