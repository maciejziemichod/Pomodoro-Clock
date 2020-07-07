import React from "react";

const SessionController = () => {
  return (
    <div>
      <div className="controller__title" id="session-label">
        Break Length
      </div>
      <div className="controller__buttons">
        <button id="session-decrement">arrow down</button>
        <div id="session-length">25</div>
        <button id="session-increment">arrow up</button>
      </div>
    </div>
  );
};

export default SessionController;
