export const addProductToWishlist = (product) => {
  return {
    type: "ADD_TO_WISHLIST",
    product,
  };
};
