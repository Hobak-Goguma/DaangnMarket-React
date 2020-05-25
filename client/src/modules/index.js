import { combineReducers } from "redux";
import heartReducer from "./heart";

const rootReducer = combineReducers({
  heartReducer,
});

export default rootReducer;
