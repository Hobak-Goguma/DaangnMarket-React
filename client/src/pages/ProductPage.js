import React, { useState,useEffect } from "react";
import styled from "styled-components";
import api from "../common/api";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import DetailProfile from "../components/Profile"
import Temper from "../components/Temper";

const StyledArticleDescription = styled.section`
  padding: 32px 0;
  width: 677px;
  margin: 0 auto;
  border-bottom: 1px solid #e9ecef;

  h1.article-title {
    margin-top: 0;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: -0.6px;
  }

  p.article-category {
    margin-top: 4px;
    font-size: 13px;
    line-height: 1.46;
    letter-spacing: -0.6px;
    color: #868e96;
  }

  p.article-price {
    margin-top: 4px;
    line-height: 1.76;
    letter-spacing: -0.6;
  }

  .article-detail {
    margin-top: 8px;
    margin-bottom: 16px;

    p {
      font-size: 17px;
      line-height: 1.6;
      letter-spacing: -0.6px;
      margin: 16px 0;
      word-break: break-all;
    }
  }

  .article-counts {
    font-size: 13px;
    line-height: 1.46;
    letter-spacing: -0.6px;
    color: #868e96;
  }
`;
const ArticleWrapper = styled.div`
  margin-top: 120px;
  padding-bottom: 50px;
`;

const ProfileTitle = styled.section`
  width: 677px;
  margin: 0 auto;

  .article-profile-link {
    display: block;
    margin-top: 25px;
    padding-bottom: 23px;
    position: relative;
    border-bottom: 1px solid #e9ecef;

    .space-between {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .article-profile-image {
        display: inline-block;
        img {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: 50%;
        }
      }

      .article-profile-left {
        display: inline-block;
        margin-left: 8px;

        .nickname {
          font-size: 15px;
          line-height: 1.5;
          letter-spacing: -0.6px;
          color: #212529;
        }

        .region-name {
          font-size: 13px;
          line-height: 1.46;
          letter-spacing: -0.6px;
          color: #212529;
        }
      }
    }
  }
`;
const ProductDetailPage = () => {
  let id = window.location.href.substring(window.location.href.indexOf("products")+9);
  const [isModal, setModal] = useState(false);
  const [sliderData, setSliderData] = useState([]);
  const [detail, setDetail] = useState([]);

  const user = {
    name : "이대성강사",
    nickname : "이대성강사",
    addr : "수성구 수성동1가",
    img : "https://dnvefa72aowie.cloudfront.net/origin/profile/201808/2d18062dcc583f144bc91cd727a1746bc993d5462b0538a3779e00d1fdc8d734.jpg?q=82&s=640x640&t=crop",
    temper : "38.2",
  }
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
      <ArticleWrapper>
        <Slider sliderData={sliderData} isModal={isModal} setModal={setModal} />
        <ProfileTitle>
          <div to="/#" className="article-profile-link">
            <div className="space-between">
              <Link to="/user">
                <DetailProfile>{user}</DetailProfile>
              </Link>
                <Temper>{user}</Temper>
            </div>
          </div>
        </ProfileTitle>
        <StyledArticleDescription>
          <h1 className="article-title">{detail.name}</h1>
          <p className="article-category">
            {detail.category} ∙<time> 4일 전</time>
          </p>
          {/* <p className="article-price">{price}원</p> */}
          <div className="article-detail">
            <p>{detail.info}</p>
          </div>
          <p className="article-counts">조회 547</p>
        </StyledArticleDescription>
      </ArticleWrapper>
    </Layout>
  );
};

export default ProductDetailPage;
