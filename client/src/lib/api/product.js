import api from "./index";

export const getProduct = (id) => fetch(`${api}/products/${id}`);
