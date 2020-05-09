import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Register" component={Register} />
      </Switch>
    </Router>
  );
}
