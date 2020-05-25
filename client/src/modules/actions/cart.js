export const addProductToCart = (product) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    product,
  };
};
