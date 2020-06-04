export default function heart(state = false, action) {
  switch (action.type) {
    case "HEART_CLICK":
      return !state;
    default:
      return state;
  }
}
