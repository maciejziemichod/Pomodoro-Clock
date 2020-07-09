import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sessionTurn, breakTurn } from "../actions";

const Timer = () => {
  const display = useSelector((state) => state.turn);
  const breakTime = useSelector((state) => state.breakTime);
  const sessionTime = useSelector((state) => state.sessionTime);
  const isRunning = useSelector((state) => state.isRunning);
  const didReset = useSelector((state) => state.reset);
  const whichTime = display === "SESSION" ? sessionTime * 60 : breakTime * 60;
  const [time, setTime] = useState(whichTime);
  const timer = calcTime(time);
  const dispatch = useDispatch();

  // Changing break/session length
  useEffect(() => {
    if (!isRunning) {
      setTime(whichTime);
    }
  }, [whichTime, didReset]);

  // Changing from/to session/break
  useEffect(() => {
    if (time === 0) {
      if (display === "SESSION") {
        dispatch(breakTurn());
        setTime(breakTime * 60);
      } else {
        dispatch(sessionTurn());
        setTime(sessionTime * 60);
      }
    }
  });

  // NOTE
  // I think I will need to rewrite how the time is calculated, so that it's not separate from redux store
  // Timer
  useEffect(() => {
    if (isRunning && time !== 0 && !didReset) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [didReset, isRunning, time]);

  return (
    <div className="timer">
      <div id="timer-label">{display}</div>
      <div id="time-left">{timer}</div>
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
