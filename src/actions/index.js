export const incrementSession = (payload) => ({
  type: "INCREMENT_SESSION",
  payload,
});

export const decrementSession = (payload) => ({
  type: "DECREMENT_SESSION",
  payload,
});

export const incrementBreak = (payload) => ({
  type: "INCREMENT_BREAK",
  payload,
});

export const decrementBreak = (payload) => ({
  type: "DECREMENT_BREAK",
  payload,
});

export const togglePlay = () => ({ type: "TOGGLE_PLAY" });
