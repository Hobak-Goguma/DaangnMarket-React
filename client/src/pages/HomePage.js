import React from "react";
import Layout from "../common/components/Layout";
import Main from "../components/home/Main";
import Market from "../components/home/Market";
import About from "../components/home/About";
import Review from "../components/home/Review";

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
