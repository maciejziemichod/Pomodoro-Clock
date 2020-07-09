import React, { useEffect } from "react";
import useInterval from "../hooks/useInterval";
import { useSelector, useDispatch } from "react-redux";
import { sessionTurn, breakTurn, decrementTime, setTime } from "../actions";

const Timer = () => {
  const turn = useSelector((state) => state.turn);
  const breakTime = useSelector((state) => state.breakTime);
  const sessionTime = useSelector((state) => state.sessionTime);
  const isRunning = useSelector((state) => state.isRunning);
  const timer = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  // Custom hook to set interval
  useInterval(
    () => {
      if (timer > 0) {
        dispatch(decrementTime());
      }

      // Change turn
      if (timer === 0) {
        if (turn === "SESSION") {
          dispatch(breakTurn());
        } else if (turn === "BREAK") {
          dispatch(sessionTurn());
        }
      }
    },
    isRunning ? 1000 : null // null makes interval stop
  );

  // Change timer when session time changes during session or when turn changes
  useEffect(() => {
    if (turn === "SESSION") {
      dispatch(setTime(sessionTime * 60));
    }
  }, [turn, sessionTime]);

  // Change timer when break time changes during break or when turn changes
  useEffect(() => {
    if (turn === "BREAK") {
      dispatch(setTime(breakTime * 60));
    }
  }, [turn, breakTime]);

  return (
    <div className="timer">
      <div id="timer-label">{turn}</div>
      <div id="time-left">{calcTime(timer)}</div>
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
