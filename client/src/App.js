import React from "react";
import Main from "./components/Main";
import Market from "./components/Market";
import About from "./components/About";
import Review from "./components/Review";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <Main></Main>
      <Market></Market>
      <About></About>
      <Review></Review>
    </Layout>
  );
}
