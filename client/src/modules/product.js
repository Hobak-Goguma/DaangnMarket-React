const ISHEART = "product/ISHEART";
const PRODUCTID = "product/PRODUCTID";

const initialState = false;

const product = (state = initialState, action) => {
  if (action.type === ISHEART) {
    return true;
  }
  return state;
};

export default product;
