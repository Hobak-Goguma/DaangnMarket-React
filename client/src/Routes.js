import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import Home from "./home";
import Login from "./login";
import Register from "./register";
// import MyPwChange from "./pages/myPage/MyPwChange";
// import MyProduct from "./pages/myPage/MyProduct";
// import MyInfo from "./pages/myPage/MyInfo";
// import SearchPage from "./pages/SearchPage";
// import ArticlePage from "./pages/ArticlePage";
// import OtherUserPage from "./pages/OtherUserPage";
// import Changelayout from "./pages/myPage/mychage/ChangeLayout";
// import UploadPage from "./pages/UploadPage";
// import WishlistPage from "./pages/WishlistPage";

// Style Wrapper
import { ThemeProvider } from "styled-components";
import Theme from "./common/themes/Theme";
import Global from "./common/themes/GlobalStyles";
import productDetail from "./productDetail";

export default function Routes() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={HomePage} />
          <Route exact path="/mypwchange" component={MyPwChange} />
          <Route exact path="/myproduct" component={MyProduct} />
          <Route exact path="/myinfo" component={MyInfo} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <Route path="/search" component={SearchPage} /> */}
          <Route path="/product/:product_id" component={productDetail} />
          {/* <Route path="/user" component={OtherUserPage} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/myinfochange" component={Changelayout} />
          <Route path="/wishlist" component={WishlistPage} /> */}
          <Redirect from="*" to="/" />
        </Switch>
        <Global />
      </Router>
    </ThemeProvider>
  );
}
