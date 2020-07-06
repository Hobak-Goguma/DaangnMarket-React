import { combineReducers } from "redux";
import login from "./reducers/loginRedux";
import wishlist from "./reducers/wishlist";
import heart from "./reducers/heart";

export default combineReducers({
  wishlist,
  heart,
  login,
});
