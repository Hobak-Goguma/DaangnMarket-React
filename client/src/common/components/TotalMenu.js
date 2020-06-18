import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TotalMenu = ({ logOut, login, onClick }) => {
  let localID;
  // useEffect(() => {
  //   localID = window.sessionStorage.getItem("id");
  // }, []);
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
              <li onClick={() => onClick("자전거")}>자전거</li>
              <li onClick={() => onClick("의자")}>의자</li>
              <li onClick={() => onClick("캠핑")}>캠핑</li>
              <li onClick={() => onClick("노트북")}>노트북</li>
              <li onClick={() => onClick("냉장고")}>냉장고</li>
              <li onClick={() => onClick("쇼파")}>쇼파</li>
              <li onClick={() => onClick("화분")}>화분</li>
            </ul>
          </li>
          <li>
            <Link to="/myinfo">
              <div>
                <span>내 정보 보기</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/myproduct">
              <div>
                <span>내 상품</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/address">
              <div>
                <span>주소 변경</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/upload">
              <div>
                <span>물품 등록</span>
              </div>
            </Link>
          </li>
          {login ? ( //로그인 여부에따라 로그인인지 회원가입인지 결정
            <li onClick={logOut}>
              <Link to="/login">
                <div>
                  <span>로그아웃</span>
                </div>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/register">
                <div>
                  <span>회원가입</span>
                </div>
              </Link>
            </li>
          )}
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
  transform: translateY(-50%);
  background: #fff;

  li.totalLists {
    cursor: pointer;
    position: relative;
    display: block;

    > div {
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
        }
      }
    }

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
      background: #fff;

      li {
        transition: 0.2s;
        height: 50px;
        line-height: 50px;
        &:hover {
          background: #ffbe93;
        }
        width: 120px;
        padding: 0 1rem;
      }
          a{
            display:block;
            width:100%;
            height:100%;
          }
      .category-lists {
        .dropdown2nd {
          display: none;
          opacity: 0;
          border: 1px solid rgba(0, 0, 0, 0.1);
          min-width: 5rem;
          position: absolute;
          top: 0;
          right: 100%;
          background: #fff;
        }
        &:hover > .dropdown2nd {
          display: block;
          opacity: 1;
        }
      }
    }
  }
`;
