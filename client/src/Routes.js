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
import MyPwChange from "./pages/myPage/MyPwChange";
import MyProduct from "./pages/myPage/MyProduct";
import MyInfo from "./pages/myPage/MyInfo";
import SearchPage from "./pages/SearchPage";
import ArticlePage from "./pages/ArticlePage";
import OtherUserPage from "./pages/OtherUserPage";
import Changelayout from "./pages/myPage/mychage/ChangeLayout";
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
<<<<<<< HEAD
          <Route exact path="/" component={HomePage} />
          <Route exact path="/mychange" component={MyChange} />
          <Route exact path="/myproduct" component={MyProduct} />
=======
          <Route exact path="/" component={App} />
          <Route exact path="/mypwchange" component={MyPwChange} />
          <Route path="/myproduct" component={MyProduct} />
>>>>>>> f924ed473c701a380fe222c33bba05f647b7e729
          <Route exact path="/myinfo" component={MyInfo} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/articles/:articles_id" component={ArticlePage} />
          <Route path="/user" component={OtherUserPage} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/myinfochange" component={Changelayout} />
          <Route path="/wishlist" component={WishlistPage} />
          <Redirect from="*" to="/" />
        </Switch>
        <Global />
      </Router>
    </ThemeProvider>
  );
}
