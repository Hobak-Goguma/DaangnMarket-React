import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchResult from "./pages/SearchResult";
import MyPage2ndLogin from "./pages/myPage/MyPage2ndLogin";
import Article from "./pages/Article";

import { ThemeProvider } from "styled-components";
import Theme from "./lib/themes/Theme";
import Global from "./lib/themes/GlobalStyles";

export default function Routes() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/search" component={SearchResult} />
          <Route path="/articles:id" component={Article} />
          <Route exact path="/my" component={MyPage2ndLogin} />
          <Redirect from="*" to="/" />
        </Switch>
        <Global />
      </Router>
    </ThemeProvider>
  );
}
