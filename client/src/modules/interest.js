const initialState = {
  interest: false,
};

export default function interest(state = initialState, action) {
  if (action.type === "LIKED") {
    return {
      ...state,
      interest: !state.interest,
    };
  }
  return state;
}
