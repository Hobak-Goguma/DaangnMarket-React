import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, setProducts, overflow, height }) => {
  return (
    <div style={{ overflow: overflow, height: height }}>
      <Header setProducts={setProducts} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
