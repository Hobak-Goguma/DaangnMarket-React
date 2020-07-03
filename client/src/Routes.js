import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/userform/RegisterPage";
import MyProduct from "./pages/MyProductPage";
import MyInfo from "./pages/MyInfoPage";
import Changelayout from "./pages/MyInfoChangePage";
import SearchPage from "./pages/SearchPage";
import ProductDetailPage from "./pages/ProductPage";
import OtherUserPage from "./pages/OtherUserPage";
import UploadPage from "./pages/UploadPage";

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
          <Route exact path="/myinfo" component={MyInfo} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/myproduct" component={MyProduct} />
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
