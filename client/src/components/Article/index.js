import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import ArticleSlider from "./ArticleSlider";
import ArticleProfile from "./ArticleProfile";
import ArticleDescription from "./ArticleDescription";
import { useState } from "react";

const Article = ({ isModal, setModal, location }) => {
  const [sliderData, setSliderData] = useState([]);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/sliderData.json")
      .then((res) => res.json())
      .then((res) => {
        setSliderData(res.sliderData1);
      });
    fetch(`http://0c525d07.ngrok.io/product/${location.pathname.split(":")[1]}`)
      .then((res) => res.json())
      .then((res) => {
        setDetail(res);
      });
  }, []);

  return (
    <ArticleWrapper>
      <ArticleSlider
        sliderData={sliderData}
        isModal={isModal}
        setModal={setModal}
      />
      <ArticleProfile />
      <ArticleDescription detail={detail} />
    </ArticleWrapper>
  );
};

export default withRouter(Article);

const ArticleWrapper = styled.div`
  margin-top: 120px;
  padding-bottom: 50px;
`;
