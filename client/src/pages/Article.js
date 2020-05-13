import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout";
import styled from "styled-components";
import ArrowNext from "../components/Arrow/Next";
import ArrowPrev from "../components/Arrow/Prev";

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
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
    <Layout>
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
      </StyledArticle>
    </Layout>
  );
};

export default Article;

const StyledArticle = styled.article`
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #000;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    margin: 0 auto;
    background-color: #000;
    .slider-wrap {
      width: 768px;
      height: 100vh;
      display: flex;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
    }
  }

  .modal-close {
    cursor: pointer;
    position: absolute;
    top: 15%;
    right: 25%;
    color: #fff;
    font-size: 4rem;
  }

  .slick-dots {
    bottom: 10px;

    li button:before {
      content: " ";
      background-color: #fff;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: block;
      position: absolute;
      bottom: 0;
      opacity: 0.3;
    }

    li.slick-active button:before {
      opacity: 0.8;
    }
  }

  margin-top: 150px;
  padding-bottom: 50px;
  section.article-images {
    position: relative;
    width: 729px;
    margin: 0 auto;

    .image-wrap {
      cursor: pointer;
      border-radius: 8px;
      position: relative;
      width: 677px;
      margin: 0 auto;
      height: 500px;
      outline: none;
      overflow: hidden;

      .overlay {
        width: 100%;
        height: 50px;
        z-index: 100;
        position: absolute;
        bottom: 0;
        filter: blur(5px);
        background-image: linear-gradient(
          rgba(0, 0, 0, 0.1),
          rgba(0, 0, 0, 0.5)
        );
      }

      img {
        height: 100%;
        width: auto;
      }
    }
  }
`;
