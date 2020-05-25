import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { API } from "../../lib/api";
import styled from "styled-components";
import ArticleSlider from "./ArticleSlider";
import ArticleProfile from "./ArticleProfile";
import ArticleDescription from "./ArticleDescription";
import ArticleFooter from "./ArticleFooter";
import { useState } from "react";

const Article = ({ isModal, setModal, location, match, history }) => {
  const [sliderData, setSliderData] = useState([]);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    let id = match.params.articles_id;

    fetch("http://localhost:3000/data/sliderData.json")
      .then((res) => res.json())
      .then((res) => {
        setSliderData(res.sliderData1);
      });
    fetch(`${API}product/${id}`)
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
      <ArticleFooter detail={detail} />
    </ArticleWrapper>
  );
};

export default withRouter(Article);

const ArticleWrapper = styled.div`
  margin-top: 120px;
  padding-bottom: 50px;
`;
