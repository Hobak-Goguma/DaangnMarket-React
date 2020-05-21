import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import MyChange from "./pages/myPage/MyChange";
import MyProduct from "./pages/myPage/MyProduct";
import MyInfo from "./pages/myPage/MyInfo";
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
        <Route exact path="/register" component={Register} />
        <Route exact path="/mychange" component={MyChange} />
        <Route exact path="/myproduct" component={MyProduct} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/articles" component={Article} />
          <Route path="/myinfo" component={MyInfo} />
          <Redirect from="*" to="/" />
        </Switch>
        <Global />
      </Router>
    </ThemeProvider>
  );
}
