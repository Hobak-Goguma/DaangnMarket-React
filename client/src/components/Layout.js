import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, setProducts, setCards, overflow, height }) => {
  const myList = [];

  return (
    <div style={{ overflow: overflow, height: height }}>
      <Header setProducts={setProducts} setCards={setCards} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
