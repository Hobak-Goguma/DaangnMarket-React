import React from "react";
import Layout from "../common/components/Layout";
import Main from "./components/Main";
import Market from "./components/Market";
import About from "./components/About";
import Review from "./components/Review";

const HomePage = () => {
  return (
    <Layout>
      <Main></Main>
      <Market></Market>
      <About></About>
      <Review></Review>
    </Layout>
  );
};

export default HomePage;
