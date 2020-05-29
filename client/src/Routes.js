import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyChange from "./pages/myPage/MyChange";
import MyProduct from "./pages/myPage/MyProduct";
import MyInfo from "./pages/myPage/MyInfo";
import SearchPage from "./pages/SearchPage";
import ArticlePage from "./pages/ArticlePage";
import OtherUserPage from "./pages/OtherUserPage";
import UploadPage from "./pages/UploadPage";
import WishlistPage from "./pages/WishlistPage";

// Style Wrapper
import { ThemeProvider } from "styled-components";
import Theme from "./lib/themes/Theme";
import Global from "./lib/themes/GlobalStyles";

export default function Routes() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/mychange" component={MyChange} />
          <Route exact path="/myproduct" component={MyProduct} />
          <Route exact path="/myinfo" component={MyInfo} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/articles/:articles_id" component={ArticlePage} />
          <Route path="/user" component={OtherUserPage} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/wishlist" component={WishlistPage} />
          <Redirect from="*" to="/" />
        </Switch>
        <Global />
      </Router>
    </ThemeProvider>
  );
}
