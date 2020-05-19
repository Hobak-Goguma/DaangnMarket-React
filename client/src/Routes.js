import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchResult from "./pages/SearchResult";
import MyChange from "./pages/myPage/MyChange";
import MyProduct from "./pages/myPage/MyProduct";
import Article from "./pages/Article";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/search" component={SearchResult} />
        <Route exact path="/articles:id" component={Article} />
        <Route exact path="/mychange" component={MyChange} />
        <Route exact path="/MyProduct" component={MyProduct} />
      </Switch>
    </Router>
  );
}
