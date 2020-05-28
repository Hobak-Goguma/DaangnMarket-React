import { combineReducers } from "redux";
import wishlist from "./wishlist";
import heart from "./heart";

export default combineReducers({
  wishlist,
  heart,
});
