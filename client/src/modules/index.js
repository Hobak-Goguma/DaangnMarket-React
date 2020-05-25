import { combineReducers } from "redux";
import login from "./loginRedux";

const rootReducer = combineReducers({
  login,
});

export default rootReducer;
