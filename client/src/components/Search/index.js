import React from "react";
import styled from "styled-components";

const Search = ({ products, sliceStart, sliceEnd }) => {
  return (
    <>
      {products.slice(sliceStart, sliceEnd).map((p, i) => (
        <SearchWrapper key={i}>
          <div className="card-photo">
            <img src="./img/4단선반.jpg" alt="사진임둥" />
          </div>
          <div className="article-info">
            <div className="article-title-content">
              <span className="article-title">{p.name}</span>
            </div>
            <p className="article-region-name">주민동</p>
            <p className="article-price">{p.price.toLocaleString()}원</p>
            <section className="article-sub-info">
              <span className="article-watch">
                <img
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/like-8111aa74d4b1045d7d5943a901896992574dd94c090cef92c26ae53e8da58260.svg"
                  alt="하트"
                />
                0
              </span>
            </section>
          </div>
        </SearchWrapper>
      ))}
    </>
  );
};

export default Search;

const SearchWrapper = styled.div`
  cursor: pointer;
  position: relative;
  text-align: left;
  display: inline-block;
  width: 217px;
  margin-right: 34px;
  margin-bottom: 40px;

  .card-photo {
    height: 160px;
    overflow: hidden;
    background-color: #f8f9fa;
    border-radius: 8px;

    img {
      width: 100%;
      display: block;
      transform: translate(0, -13%);
    }
  }

  .article-info {
    .article-title-content {
      .article-title {
        display: block;
        font-weight: 600;
        color: #212529;
        font-size: 16px;
        line-height: 18px;
        margin-top: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    p.article-region-name {
      font-size: 14px;
      line-height: 18px;
      margin-top: 6px;
      color: #868e96;
    }
    p.article-price {
      color: #ff8a3d;
      font-size: 15px;
      line-height: 18px;
      margin-top: 6px;
    }

    section.article-sub-info {
      position: absolute;
      right: 0;
      bottom: 0;

      .article-watch {
        color: #212529;
        display: inline-block;
        font-size: 14px;
        img {
          width: 13px;
          margin: 3px 3px -1px 4px;
        }
      }
    }
  }
`;
