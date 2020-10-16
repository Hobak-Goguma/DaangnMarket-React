import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';

import ArrowNext from './arrows/Next';
import ArrowPrev from './arrows/Prev';

interface ArticleSliderProps {
  isModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  sliderData: {
    img: string;
  }[];
}

const SliderStyle = css`
  width: 768px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

const StyledArticleSliderWrapper = styled.div`
  .slick-dots {
    bottom: 10px;

    li button:before {
      content: ' ';
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
`;

const StyledModal = styled.div`
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
`;

const StyledModalClose = styled.div`
  cursor: pointer;
  position: absolute;
  top: 5%;
  right: 20%;
  color: #fff;
  font-size: 4rem;
`;

const StyledImagesWrapper = styled.section`
  position: relative;
  width: 729px;
  margin: 0 auto;
`;

const StyledImageWrapper = styled.div`
  cursor: pointer;
  border-radius: 8px;
  position: relative;
  width: 677px;
  margin: 0 auto;
  height: 500px;
  outline: none;
  overflow: hidden;

  img {
    height: 100%;
    width: auto;
  }
`;

const StyledOverlay = styled.div`
  width: 100%;
  height: 50px;
  z-index: 100;
  position: absolute;
  bottom: 0;
  filter: blur(5px);
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));
`;

const StyledSlider = styled(Slider)`
  ${SliderStyle};
`;

const StyledSliderWrapper = styled.div`
  ${StyledSlider}
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidersToScroll: 1,
  draggable: false,
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />,
};

const settingsNoArrow = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidersToScroll: 1,
  nextArrow: <ArrowNext display={false} />,
  prevArrow: <ArrowPrev display={false} />,
};

const ArticleSlider: React.FC<ArticleSliderProps> = ({
  sliderData,
  isModal,
  setModal,
}) => {
  return (
    <StyledArticleSliderWrapper>
      <StyledImagesWrapper>
        <div>
          <StyledSliderWrapper>
            <Slider {...settings}>
              {sliderData.map((v, i) => (
                <StyledImageWrapper key={i} onClick={() => setModal(true)}>
                  <img src={v.img} alt="" />
                  <StyledOverlay />
                </StyledImageWrapper>
              ))}
            </Slider>
            {!isModal ? null : (
              <StyledModal>
                <StyledSlider {...settingsNoArrow}>
                  {sliderData.map((v, i) => (
                    <StyledImageWrapper key={i}>
                      <img src={v.img} alt="" />
                    </StyledImageWrapper>
                  ))}
                </StyledSlider>
                <StyledModalClose onClick={() => setModal(false)}>
                  &times;
                </StyledModalClose>
              </StyledModal>
            )}
          </StyledSliderWrapper>
        </div>
      </StyledImagesWrapper>
    </StyledArticleSliderWrapper>
  );
};

export default ArticleSlider;
