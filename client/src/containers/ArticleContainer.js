import React from "react";
import Layout from "../components/common/Layout";
import { useState } from "react";
import Article from "../components/Article";

const ArticleContainer = () => {
  const [isModal, setModal] = useState(false);
  return (
    <Layout
      overflow={isModal ? "hidden" : "unset"}
      height={isModal ? "100vh" : "unset"}
    >
      <Article isModal={isModal} setModal={setModal} />
    </Layout>
  );
};

export default ArticleContainer;
