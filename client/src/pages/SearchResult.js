import React, { useState, useEffect } from "react";
import { API } from "../lib/api";
import FlatCardJungo from "../components/FlatCard/FlatCardJungo";
import FlatCardCompany from "../components/FlatCard/FlatCardCompany";
import styled from "styled-components";
import Layout from "../components/Layout";

const SearchResult = (props) => {
  const [cards, setCards] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [numA, setNumA] = useState(6);
  const [numB, setNumB] = useState(18);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    fetch(`${API}product/search?q=${window.location.href.split("=")[1]}`)
      .then((res) => res.json())
      .then((res) => {
        setCardData(res);
        setCards([]);
        console.log(res);
      });

    let timer = setTimeout(() => {
      setFetched(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const showMoreJungo = () => {
    setCards([
      ...cards,
      <FlatCardJungo data={cardData} key={cards} a={numA} b={numB} />,
    ]);
    setNumA(numA + 12);
    setNumB(numB + 12);
  };
  const showMoreCompany = () => {
    setCards([
      ...cards,
      <FlatCardCompany data={cardData} key={cards} a={numA} b={numB} />,
    ]);
    setNumA(numA + 12);
    setNumB(numB + 12);
  };

  return (
    <Layout setCardData={setCardData} setCards={setCards}>
      <StyledSearchResult>
        <div className="result-container">
          <div className="articles-wrap">
            <p className="article-kind">중고거래</p>
            {cardData.length === 0 ? (
              <div
                style={{
                  fontSize: 50,
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "300px",
                }}
              >
                {fetched ? "물품이 없네요" : "로딩중..."}
              </div>
            ) : (
              <FlatCardJungo data={cardData} a={0} b={6} />
            )}
            {cards}
          </div>
          <div className="more-btn" onClick={showMoreJungo}>
            <span>더보기</span>
          </div>
        </div>
        {/* <div className="result-container">
          <div className="articles-wrap">
            <p className="article-kind">동네업체</p>
            {cardData.length === 0 ? (
              <div
                style={{
                  fontSize: 50,
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "300px",
                }}
              >
                {fetched ? "동네업체가 없네요" : "로딩중..."}
              </div>
            ) : (
              <FlatCardCompany data={cardData} a={0} b={6} />
            )}
            {cards}
          </div>
          <div className="more-btn" onClick={showMoreCompany}>
            <span>더보기</span>
          </div>
        </div> */}
      </StyledSearchResult>
    </Layout>
  );
};

export default SearchResult;

const StyledSearchResult = styled.section`
  background: #f8f9fa;
  padding: 30px 0 40px 0;
  margin-top: 6rem;

  .result-container {
    border-radius: 8px;
    border: 1px solid #e9ecef;
    width: 800px;
    margin: 0 auto;
    margin-bottom: 20px;
    background: #fff;
    .wrap-last {
      margin-right: 40px;
    }

    .articles-wrap {
      margin-left: 40px;

      p.article-kind {
        font-weight: 600;
        color: #212529;
        font-size: 18px;
        margin: 20px 0;
      }

      .article-hr-border {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #e9ecef;
        padding: 0;

        &:last-of-type {
          display: none;
        }
      }

      .business-article {
        display: block;
        padding: 20px 0;
        line-height: 26px;
        overflow: auto;

        .article-photo {
          float: left;
          width: 120px;
          height: 120px;
          overflow: hidden;
          border-radius: 8px;
          background-color: #f8f9fa;

          img {
            width: 100%;
          }
        }

        .article-desc {
          margin-left: 140px;
          padding-top: 8px;
          position: relative;
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
            .article-content {
              font-size: 16px;
              line-height: 18px;
              margin-top: 6px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              display: block;
            }
          }

          .article-region-name {
            font-size: 14px;
            line-height: 18px;
            margin-top: 6px;
            color: #868e96;
          }
          .article-price {
            font-weight: 600;
            color: #ff8a3d;
            font-size: 15px;
            line-height: 18px;
            margin-top: 6px;
          }
          .article-sub-info {
            position: absolute;
            right: 0;
            bottom: 0;
            font-size: 14px;
            color: #868e96;

            .article-comment,
            .article-watch {
              color: #212529;
              display: inline-block;
              font-size: 14px;
              position: relative;

              img {
                width: 13px;
                margin: 7px 6px;
              }
            }

            .article-watch img {
              margin-top: 7.5px;
            }
          }
        }
      }

      .flat-card {
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
      }
    }
    .more-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      cursor: pointer;
      width: 100%;
      color: #868e96;
      font-size: 16px;
      border-top: 1px solid #e8ecef;
    }
  }
`;
