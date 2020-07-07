import React from "react";

const BreakController = () => {
  return (
    <div>
      <div className="controller__title" id="break-label">
        Break Length
      </div>
      <div className="controller__buttons">
        <button id="break-decrement">arrow down</button>
        <div id="break-length">5</div>
        <button id="break-increment">arrow up</button>
      </div>
    </div>
  );
};

export default BreakController;
