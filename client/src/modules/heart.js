const initState = {
  heart: false,
};

const heartReducer = (state = initState, action) => {
  if (action.type === "HEART_CLICK") {
    return { ...state, heart: true };
  }
  if (action.type === "HEART_UNCLICK") {
    return { ...state, heart: false };
  }
  return state;
};

export default heartReducer;
