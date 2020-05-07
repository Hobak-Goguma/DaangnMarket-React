import React, { useState } from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <StyledCategory>
      <li className="category-lists">
        <div>
          <i className="fas fa-bars"></i>
          <span>카테고리</span>
        </div>
        <ul className="dropdown">
          <li>자전거</li>
          <li>의자</li>
          <li>캠핑</li>
          <li>노트북</li>
          <li>냉장소</li>
          <li>쇼파</li>
          <li>화분</li>
          <li>사람</li>
        </ul>
      </li>
    </StyledCategory>
  );
};

export default Category;

const StyledCategory = styled.ul`
  position: absolute;
  right: 11.8%;
  z-index: 1000;
  top: 25px;

  li.category-lists {
    cursor: pointer;
    position: relative;
    display: block;
    height: 100px;

    div {
      width: 140px;
      font-size: 16px;
      color: #ff8a3d;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      /* border: 1px solid #ff8a3d;
      border-radius: 20px; */
      text-align: center;
      height: 40px;
    }

    span {
    }
    i {
      margin-right: 10px;
    }

    &:hover > .dropdown {
      display: block;
      opacity: 1;
    }

    .dropdown {
      display: none;
      opacity: 0;
      margin-top: 1.7rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
      min-width: 5rem;
      position: absolute;
      right: 0;

      li {
        transition: 0.2s;
        &:hover {
          background: #f1f1f1;
        }
        width: 140px;
        padding: 1rem;
        background: #fff;
      }
    }
  }
`;
