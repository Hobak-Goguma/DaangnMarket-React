import React from "react";
import styled from "styled-components";

const Description = ({ detail }) => {
  return (
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
  );
};

export default Description;

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
