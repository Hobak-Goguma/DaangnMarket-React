const initialState = {
  heart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const productInWishlist = state.find((p) => p.id === action.product.id);
      if (!productInWishlist) return [...state, !state.heart];

    default:
      return state;
  }
};
