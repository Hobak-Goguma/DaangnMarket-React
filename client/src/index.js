import React from "react";
import { render } from "react-dom";
import Routes from "./Routes";
// import "./index.css";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./store/modules";
import { setUser, check } from "./store/modules/user";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadUser() {
  try {
    const user = localStorage.getItem("user");
    if (!user) return;

    store.dispatch(setUser(user));
    store.dispatch(check());
  } catch (e) {
    console.log(e);
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
