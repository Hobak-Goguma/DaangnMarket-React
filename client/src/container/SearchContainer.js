import React, { useEffect, useState } from "react";
import api from "../common/api";
import Layout from "../components/Layout";
import Search from "../components/search";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
// Hold Redux implementation

const SearchContainer = () => {
  const [products, setProducts] = useState([]);
  const [numB, setNumB] = useState(6);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    api
      .get(`/product/search?q=${window.location.href.split("=")[1]}`)
      .then((res) => {
        setProducts(res.data);
      });
    let timer = setTimeout(() => {
      setFetched(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const showMore = () => {
    console.log(products.length);
    setNumB(numB + 12);
  };

  return (
    <Layout setProducts={setProducts} setNumB={setNumB}>
      <SearchContainerWrapper>
        <div className="result-container">
          <div className="articles-wrap">
            <p className="article-kind">중고거래</p>
            {products.length === 0 ? (
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
              <Search products={products} sliceStart={0} sliceEnd={numB} />
            )}
          </div>
          {products.length > numB ? (
            <div className="more-btn" onClick={showMore}>
              <span>더보기</span>
            </div>
          ) : null}
        </div>
      </SearchContainerWrapper>
    </Layout>
  );
};

export default withRouter(SearchContainer);

const SearchContainerWrapper = styled.section`
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
