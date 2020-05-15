import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }, props) => {
  const myList = [];

  return (
    <>
      <Header setData={props.setData} />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
