import { combineReducers } from "redux";
import product from "./product";
import heartReducer from "./heart";

const rootReducer = combineReducers({
  product,
  heartReducer,
});

export default rootReducer;
