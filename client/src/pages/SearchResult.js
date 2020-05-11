import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import FlatCard from "../components/FlatCard";

const SearchResult = () => {
  return (
    <Layout>
      <StyledSearchResult>
        <div className="result-container">
          <div className="articles-wrap">
            <p className="article-kind">중고거래</p>
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
            <FlatCard />
          </div>
        </div>
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
    .articles-wrap {
      /* padding: 0 40px; */
      margin-left: 60px;

      p.article-kind {
        font-weight: 600;
        color: #212529;
        font-size: 18px;
        margin: 20px 0;
      }

      .flat-card {
        cursor: pointer;
        position: relative;
        text-align: left;
        display: inline-block;
        width: 200px;
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
            font-weight: 600;
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
  }
`;
