import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import Routes from "./Routes";
import rootReducer from "./redux";

const store = createStore(rootReducer, composeWithDevTools());

render(
  <Provider store={store}>
    {()=><Routes />}
  </Provider>,
  document.getElementById("root")
);
