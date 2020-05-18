import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ArticleProfile = () => {
  return (
    <StyledArticleProfile>
      <Link className="article-profile-link" to="/">
        <div className="space-between">
          <div style={{ display: "flex" }}>
            <div className="article-profile-image">
              <img
                src="https://dnvefa72aowie.cloudfront.net/origin/profile/201808/2d18062dcc583f144bc91cd727a1746bc993d5462b0538a3779e00d1fdc8d734.jpg?q=82&s=640x640&t=crop"
                alt="이대성강사"
              />
            </div>
            <div className="article-profile-left">
              <div className="nickname">이대성강사</div>
              <div className="region-name">수성구 수성동1가</div>
            </div>
          </div>
          <div className="article-profile-right">
            <dl className="temperature-wrap">
              <dt>매너온도</dt>
              <dd className="text-color-04">38.2°C</dd>
            </dl>
            <div className="meters">
              <div className="bar bar-color-04" style={{ width: "38%" }}></div>
            </div>
            <div className="face face-04"></div>
          </div>
        </div>
      </Link>
    </StyledArticleProfile>
  );
};

export default ArticleProfile;

const StyledArticleProfile = styled.section`
  width: 677px;
  margin: 0 auto;

  .article-profile-link {
    text-decoration: none;
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

    .article-profile-right {
      position: absolute;
      right: 0;
      padding-right: 36px;

      .meters {
        clear: both;
        display: block;
        width: 100px;
        background-color: #e9ecef;
        height: 4px;
        border-radius: 100px;
        position: relative;
        margin-top: 24px;

        .bar {
          background-color: #319e45;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          height: 4px;
          border-radius: 100px;
        }
      }

      .face.face-04 {
        position: absolute;
        right: 0;
        top: 0;
        background: url("https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/face-icon-set@2x-0bece009c619b4706f52a750aca82448334aa3e39d353579f2ce9c365639a03b.png")
          no-repeat;
        background-position: 0 -99px;
        background-size: 29px 147px;
        width: 24px;
        height: 24px;
      }

      dl.temperature-wrap {
        display: block;
        width: 100px;

        dt {
          position: absolute;
          top: 36px;
          right: 0;
          font-size: 12px;
          line-height: 1;
          letter-spacing: -0.6px;
          color: #868e96;
        }

        dd.text-color-04 {
          color: #319e45;
          position: absolute;
          right: 30px;
          font-size: 16px;
          font-weight: bold;
          line-height: 1;
          letter-spacing: -0.5px;
          margin-top: 1px;
        }
      }
    }
  }
`;
