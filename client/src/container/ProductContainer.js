import styled from "styled-components";
import React, { useState,useEffect } from "react";
import api from "../common/api";
import Layout from "../common/components/Layout";
import Slider from "../components/Slider";
import DetailHeader from "../components/DetailHeader";
import Description from "../components/DetailDescription";


const ArticleWrapper = styled.div`
  margin-top: 120px;
  padding-bottom: 50px;
`;



const ProductDetailContainer = () => {
  let id = window.location.href.substring(window.location.href.indexOf("products")+9);
  const [isModal, setModal] = useState(false);
  const [sliderData, setSliderData] = useState([]);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/sliderData.json")
      .then((res) => res.json())
      .then((res) => {
        setSliderData(res.sliderData1);
      });
    api.get(`/product/${id}`).then((res) => setDetail(res.data));
  }, []);


  return (
    <Layout
      overflow={isModal ? "hidden" : "unset"}
      height={isModal ? "100vh" : "unset"}
    >
      {/* <ProductDetail isModal={isModal} setModal={setModal} /> */}
      <ArticleWrapper>
        <Slider sliderData={sliderData} isModal={isModal} setModal={setModal} />
        <DetailHeader />
        <Description detail={detail} />
      </ArticleWrapper>
    </Layout>
  );
};




export default ProductDetailContainer;
 