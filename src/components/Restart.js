import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../actions";

const Restart = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="button"
      id="reset"
      onClick={() => {
        dispatch(reset());
      }}
    >
      Reset
    </button>
  );
};

export default Restart;
