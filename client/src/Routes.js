import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./home";
import LoginPage from "./login";
import RegisterPage from "./register";
import MyPwChange from "./myPage/mypwChange";
import MyProduct from "./myPage/myproduct";
import MyInfo from "./myPage/myInfo";
import Changelayout from "./myPage/myInfo/components/Changelayout";
import SearchPage from "./search";
import ProductDetailPage from "./productDetail";
import OtherUserPage from "./otherUser";
import UploadPage from "./upload";

// Style Wrapper
import { ThemeProvider } from "styled-components";
import Theme from "./common/themes/Theme";
import Global from "./common/themes/GlobalStyles";

export default function Routes() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/mypwchange" component={MyPwChange} />
          <Route exact path="/myproduct" component={MyProduct} />
          <Route exact path="/myinfo" component={MyInfo} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/myinfochange" component={Changelayout} />
          <Route path="/products/:product_id" component={ProductDetailPage} />
          <Route path="/user" component={OtherUserPage} />
          <Route path="/upload" component={UploadPage} />

          <Redirect from="*" to="/" />
        </Switch>
        <Global />
      </Router>
    </ThemeProvider>
  );
}
