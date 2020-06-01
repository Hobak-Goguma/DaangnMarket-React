import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import api from "../../common/api";
import styled from "styled-components";
import Slider from "./Slider";
import Profile from "./Profile";
import Description from "./Description";
import Footer from "./Footer";
import { useState } from "react";

const ProductDetail = ({ isModal, setModal, match }) => {
  const [sliderData, setSliderData] = useState([]);
  const [detail, setDetail] = useState([]);

  let id = match.params.product_id;
  useEffect(() => {
    console.log(id);
    window.localStorage.setItem("productId", id);
    fetch("http://localhost:3000/data/sliderData.json")
      .then((res) => res.json())
      .then((res) => {
        setSliderData(res.sliderData1);
      });
    api.get(`/product/${id}`).then((res) => setDetail(res.data));
  }, []);

  return (
    <ArticleWrapper>
      <Slider sliderData={sliderData} isModal={isModal} setModal={setModal} />
      <Profile />
      <Description detail={detail} />
      <Footer detail={detail} id={id} />
    </ArticleWrapper>
  );
};

export default withRouter(ProductDetail);

const ArticleWrapper = styled.div`
  margin-top: 120px;
  padding-bottom: 50px;
`;
