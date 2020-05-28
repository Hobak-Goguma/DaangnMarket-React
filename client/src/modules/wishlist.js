export default function wishlist(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "SET_NEW_LIST":
      return action.payload;
    case "REMOVE_PRODUCT":
      const newState = state.filter((item) => item.pk !== action.payload);
      return newState;
    default:
      return state;
  }
}
