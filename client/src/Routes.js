import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Userform/Register";
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
          <Route exact path="/portfolioData/dangn/" component={HomePage} />
          <Route exact path="/portfolioData/dangn/myinfo" component={MyInfo} />
          <Route exact path="/portfolioData/dangn/login" component={LoginPage} />
          <Route exact path="/portfolioData/dangn/register" component={RegisterPage} />
          <Route path="/portfolioData/dangn/myproduct" component={MyProduct} />
          <Route path="/portfolioData/dangn/search" component={SearchPage} />
          <Route path="/portfolioData/dangn/myinfochange" component={Changelayout} />
          <Route path="/portfolioData/dangn/products/:product_id" component={ProductDetailPage} />
          <Route path="/portfolioData/dangn/user" component={OtherUserPage} />
          <Route path="/portfolioData/dangn/upload" component={UploadPage} />
          <Redirect from="*" to="/portfolioData/dangn/" />
        </Switch>
        <Global />
      </Router>
    </ThemeProvider>
  );
}
