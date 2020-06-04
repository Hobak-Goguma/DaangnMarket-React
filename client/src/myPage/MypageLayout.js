import React from "react";
import MyNav from "./components/MyPageNav";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";

const MyLayout = ({ children, choose, history }) => {
  return (
    <>
      <Header />
      <div className="container">
        <MyNav choose={choose} history={history} />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MyLayout;
