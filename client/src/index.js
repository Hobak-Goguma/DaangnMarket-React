import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import Routes from "./Routes";
import rootReducer from "./modules";
import heartReducer from "./modules/heart";

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState(heartReducer));
render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
