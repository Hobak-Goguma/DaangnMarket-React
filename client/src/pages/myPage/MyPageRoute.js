import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MypageLayout from "./MypageLayout"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/my/my" component={MypageLayout} />
      </Switch>
    </Router>
  );
}
