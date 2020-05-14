import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, setCardData, setCards, overflow, height }) => {
  const myList = [];

  return (
    <div style={{ overflow: overflow, height: height }}>
      <Header setCardData={setCardData} setCards={setCards} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
