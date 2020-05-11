import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

<<<<<<< HEAD
const TotalMenu = ({logOut}) => {
=======
const TotalMenu = ({ logOut }) => {
>>>>>>> f6a43ee76bf830ee23b3147a5d2b9c54940dfeea
  return (
    <StyledTotalMenu>
      <li className="totalLists">
        <div>
          <span>전체메뉴</span>
          <div></div>
        </div>
        <ul className="dropdown">
          <li className="category-lists">
            <div>카테고리</div>
            <ul className="dropdown2nd">
              <li>의자</li>
              <li>의자</li>
              <li>캠핑</li>
              <li>노트북</li>
              <li>냉장소</li>
              <li>쇼파</li>
              <li>화분</li>
            </ul>
          </li>
          <li>의자</li>
          <li>캠핑</li>
          <li>노트북</li>
          <li>냉장소</li>
          <li>쇼파</li>
          <li>화분</li>
<<<<<<< HEAD
          <li>
            <Link to="/login">
                <div onClick={logOut}>
                    <span>로그아웃</span>
                </div>
=======
          <li onClick={logOut}>
            <Link to="/login">
              <div>
                <span>로그아웃</span>
              </div>
>>>>>>> f6a43ee76bf830ee23b3147a5d2b9c54940dfeea
            </Link>
          </li>
        </ul>
      </li>
    </StyledTotalMenu>
  );
};

export default TotalMenu;

const StyledTotalMenu = styled.ul`
  position: absolute;
  right: 0;
  z-index: 1000;
  top: 50%;
<<<<<<< HEAD
  transform:translateY(-50%);
=======
  transform: translateY(-50%);
>>>>>>> f6a43ee76bf830ee23b3147a5d2b9c54940dfeea

  li.totalLists {
    cursor: pointer;
    position: relative;
    display: block;

<<<<<<< HEAD
    >div {
=======
    > div {
>>>>>>> f6a43ee76bf830ee23b3147a5d2b9c54940dfeea
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
<<<<<<< HEAD
      height:60px;
      div{
        margin-left:8px;
        position:relative;
        width:23px;
        height:2px;
        background:#ff8a3d;
        &:before{
          content:"";
          width:100%;
          height:2px;
          background:#ff8a3d;
          position:absolute;
          top:-8px;
          left:0;
        }
        &:after{
          content:"";
          width:100%;
          height:2px;
          background:#ff8a3d;
          position:absolute;
          bottom:-8px;
          left:0;
=======
      height: 60px;
      div {
        margin-left: 8px;
        position: relative;
        width: 23px;
        height: 2px;
        background: #ff8a3d;
        &:before {
          content: "";
          width: 100%;
          height: 2px;
          background: #ff8a3d;
          position: absolute;
          top: -8px;
          left: 0;
        }
        &:after {
          content: "";
          width: 100%;
          height: 2px;
          background: #ff8a3d;
          position: absolute;
          bottom: -8px;
          left: 0;
>>>>>>> f6a43ee76bf830ee23b3147a5d2b9c54940dfeea
        }
      }
    }

<<<<<<< HEAD

=======
>>>>>>> f6a43ee76bf830ee23b3147a5d2b9c54940dfeea
    &:hover > .dropdown {
      display: block;
      opacity: 1;
    }

    .dropdown {
      display: none;
      opacity: 0;
      border: 1px solid rgba(0, 0, 0, 0.1);
      min-width: 5rem;
      position: absolute;
      right: 0;

      li {
        transition: 0.2s;
        &:hover {
<<<<<<< HEAD
          background: #f1f1f1;
=======
          background: #ffbe93;
>>>>>>> f6a43ee76bf830ee23b3147a5d2b9c54940dfeea
        }
        width: 100px;
        padding: 1rem;
        background: #fff;
      }
<<<<<<< HEAD
      .category-lists{
=======
      .category-lists {
>>>>>>> f6a43ee76bf830ee23b3147a5d2b9c54940dfeea
        .dropdown2nd {
          display: none;
          opacity: 0;
          border: 1px solid rgba(0, 0, 0, 0.1);
          min-width: 5rem;
          position: absolute;
<<<<<<< HEAD
          top:0;
=======
          top: 0;
>>>>>>> f6a43ee76bf830ee23b3147a5d2b9c54940dfeea
          right: 100%;
        }
        &:hover > .dropdown2nd {
          display: block;
          opacity: 1;
        }
<<<<<<< HEAD

=======
>>>>>>> f6a43ee76bf830ee23b3147a5d2b9c54940dfeea
      }
    }
  }
`;
