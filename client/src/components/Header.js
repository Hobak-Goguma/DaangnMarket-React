import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MyDrop from "./MyDropMenu";
import TotalMenu from "./TotalMenu";
const Headers = styled.header`
  width: 100%;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  top: 0;
  position: fixed;
  background-color: #fff;
  z-index: 100;
  .container {
    img {
      display: inline-block;
      margin-top: 12px;
      padding: 10px 0;
      width: 132px;
    }
    div {
      display: inline-block;
    }
    .inputBox {
      margin: 20px 0 20px 20px;
      width: 470px;
      height: 20px;
      position: relative;
      padding: 12px;
      border: 1px solid #ff8a3d;
      border-radius: 5px;
      input {
        outline: none;
        position: absolute;
        top: 13px;
        left: 10px;
        width: 440px;
        font-size: 17px;
        border: 0;
      }
      label {
        position: absolute;
        top: 10px;
        right: 10px;
        img {
          padding: 0;
          width: 26px;
          margin-top: 0px;
        }
      }
    }
    section.log {
      right: 140px;
    }
    section {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      > a {
        display: inline-block;
        .logIn {
          width: 140px;
          border: 1px solid #ff8a3d;
          border-radius: 20px;
          color: #ff8a3d;
          font-weight: bold;
          text-align: center;
          height: 40px;
          position: relative;
          margin: 0;
          top: 2px;
          &:hover {
            background-color: #ff8a3d;
            color: white;
          }
          div {
            position: absolute;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      div:first-child {
        margin-right: 10px;
      }
    }
  }
`;

let localID, localPW;
let id;
const Header = ({ history }) => {
  const [login, setLogin] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    // localID = localStorage.getItem("id");
    // localPW = localStorage.getItem("pw");

    // if (localID && localPW) {
    //   console.log(localID, localPW);
    //   setLogin(true);
    // }
    id = window.sessionStorage.getItem("id");
    if (id) {
      setLogin(true);
    } else {
      setLogin(false);
      window.sessionStorage.clear();
    }
  }, []);

  const logOut = () => {
    window.sessionStorage.clear();
    setLogin(false);

    // localStorage.setItem("id", "");
    // localStorage.setItem("pw", "");
  };

  const searchKeyPress = (e) => {
    if (window.event.keyCode === 13 && keyword === "자전거") {
      history.push("/search");
    }
  };

  return (
    <Headers>
      <div className="container">
        <Link to="/">
          {
            // 로고 클릭시 메인으로 이동
          }
          <img src="./img/logo.svg" alt="로고" />
        </Link>
        <div className="inputBox">
          <input
            type="text"
            name="search"
            id="searchItem"
            placeholder="지역, 상품, 업체등을 검색해보세요."
            onKeyPress={searchKeyPress}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <label htmlFor="searchItem">
            <img src="./img/search-icon.svg" alt="search" />
          </label>
        </div>

        {login ? ( //로그인 여부확인
          <MyDrop localID={id}></MyDrop>
        ) : (
          <section className="log">
            <Link to="/login">
              <div className="logIn">
                <div>로그인</div>
              </div>
            </Link>
          </section>
        )}
        <TotalMenu logOut={logOut} />
      </div>
    </Headers>
  );
};

export default withRouter(Header);
