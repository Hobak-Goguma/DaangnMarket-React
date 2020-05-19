import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyChange from "./pages/myPage/MyChange";
import MyProduct from "./pages/myPage/MyProduct";
import SearchPage from "./pages/SearchPage";
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
          <Route exact path="/mychange" component={MyChange} />
          <Route exact path="/MyProduct" component={MyProduct} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/articles" component={Article} />
          <Redirect from="*" to="/" />
        </Switch>
        <Global />
      </Router>
    </ThemeProvider>
  );
}
