import React from "react";
import Header from "./components/Header";
import Main from './components/Main';
import Market from "./components/Market";
import About from "./components/About";
import Review from "./components/Review";

export default function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Market></Market>
      <About></About>
      <Review></Review>
    </>
  );
}
