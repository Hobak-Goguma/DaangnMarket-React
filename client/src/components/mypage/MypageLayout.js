import React from "react";
import MyNav from "./MyPageNav";
import Layout from "../Layout";

const MyLayout = ({ children, choose, history }) => {
  return (
    <Layout>
      <div className="container">
        <MyNav choose={choose} history={history} />
        {children}
      </div>
    </Layout>
  );
};

export default MyLayout;
