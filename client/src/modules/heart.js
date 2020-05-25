const initState = {
  heart: false,
};

const heartReducer = (state = initState, action) => {
  // if (action.type === "HEART_CLICK") {
  //   return { heart: !state.heart };
  // }
  // return state;
  switch (action.type) {
    case "HEART_CLICK":
      return { heart: !state.heart };
    default:
      return state;
  }
};

export default heartReducer;
