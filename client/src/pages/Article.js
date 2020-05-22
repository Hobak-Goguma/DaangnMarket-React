import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout";
import styled from "styled-components";
import ArrowNext from "../components/Arrow/Next";
import ArrowPrev from "../components/Arrow/Prev";
import ArticleProfile from "../components/Article/ArticleProfile";
import ArticleDescription from "../components/Article/ArticleDescription";

const dooo = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidersToScroll: 1,
};

const settings = {
  dooo,
  draggable: false,
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />,
};

const settingsNo = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <ArrowNext display="none" />,
  prevArrow: <ArrowPrev display="none" />,
};

const Article = () => {
  const [sliderData, setSliderData] = useState([]);
  const [isModal, setModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/data/sliderData.json")
      .then((res) => res.json())
      .then((res) => {
        setSliderData(res.sliderData1);
      });
  }, []);

  return (
    <Layout
      overflow={isModal ? "hidden" : "unset"}
      height={isModal ? "100vh" : "unset"}
    >
      <StyledArticle>
        <section className="article-images">
          <div className="image-slider">
            <div className="slider-wrap">
              <Slider {...settings}>
                {sliderData.map((v, i) => (
                  <div
                    className="image-wrap"
                    key={i}
                    onClick={() => setModal(true)}
                  >
                    <img src={v.img} alt="" />
                    <div className="overlay"></div>
                  </div>
                ))}
              </Slider>
              {!isModal ? null : (
                <div className="modal">
                  <Slider {...settingsNo} className="slider-wrap">
                    {sliderData.map((v, i) => (
                      <div className="image-wrap" key={i}>
                        <img src={v.img} alt="" />
                      </div>
                    ))}
                  </Slider>
                  <div className="modal-close" onClick={() => setModal(false)}>
                    &times;
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <ArticleProfile />
        <ArticleDescription />
      </StyledArticle>
    </Layout>
  );
};

export default Article;

const StyledArticle = styled.article`
  margin-top: 120px;
  padding-bottom: 50px;
`;
