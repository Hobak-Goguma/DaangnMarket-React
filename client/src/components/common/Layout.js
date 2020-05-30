import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, setProducts, overflow, height, setNumB }) => {
  return (
    <div style={{ overflow: overflow, height: height }}>
      <Header setProducts={setProducts} setNumB={setNumB} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
