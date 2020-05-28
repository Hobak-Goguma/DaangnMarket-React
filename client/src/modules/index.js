import { combineReducers } from "redux";
import login from "./loginRedux";
import wishlist from "./wishlist";
import heart from "./heart";

export default combineReducers({
  wishlist,
  heart,
  login,
});
