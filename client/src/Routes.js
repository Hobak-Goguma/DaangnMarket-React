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
import MyInfo from "./pages/myPage/MyInfo";
import SearchPage from "./pages/SearchPage";
import ArticlePage from "./pages/ArticlePage";
import OtherUserPage from "./pages/OtherUserPage";
import UploadPage from "./pages/UploadPage";
import { ThemeProvider } from "styled-components";
import Theme from "./lib/themes/Theme";
import Global from "./lib/themes/GlobalStyles";

export default function Routes() {
  return (
<<<<<<< HEAD
<ThemeProvider theme={Theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/mychange" component={MyChange} />
        <Route exact path="/myproduct" component={MyProduct} />
=======
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/mychange" component={MyChange} />
          <Route exact path="/MyProduct" component={MyProduct} />
>>>>>>> efa2b22fa557070acefbc037c6b2690c3da98cab
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/search" component={SearchPage} />
<<<<<<< HEAD
          <Route path="/articles" component={Article} />
          <Route path="/myinfo" component={MyInfo} />
=======
          <Route path="/articles/:articles_id" component={ArticlePage} />
          <Route path="/user" component={OtherUserPage} />
          <Route path="/upload" component={UploadPage} />
>>>>>>> efa2b22fa557070acefbc037c6b2690c3da98cab
          <Redirect from="*" to="/" />
        </Switch>
        <Global />
      </Router>
    </ThemeProvider>
  );
}
