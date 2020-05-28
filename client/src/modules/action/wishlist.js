export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};
export const removeProduct = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  };
};
export const setNewList = (list) => {
  return {
    type: "SET_NEW_LIST",
    payload: list,
  };
};
