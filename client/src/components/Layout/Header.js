import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import api from "../../common/api";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MyDrop from "./HeaderWelcome";
import TotalMenu from "./HeaderDropdown";

const Headers = styled.header`
  width: 100%;
  height: 6em;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  top: 0;
  position: fixed;
  padding: 4px 0;
  box-sizing: border-box;
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
      height: 46px;
      position: relative;
      padding: 0;
      border: 1px solid #ff8a3d;
      border-radius: 5px;
      input {
        outline: none;
        width: 440px;
        padding-left: 24px;
        padding-right: 10px;
        font-size: 17px;
        line-height: 46px;
        border: 0;
        box-sizing: border-box;
        background-color: transparent;
      }
      label {
        position: absolute;
        top: 10px;
        right: 10px;
        img {
          padding: 0;
          width: 26px;
          margin-top: 0;
        }
      }
    }
    section.log {
      right: 160px;
    }
    section.register {
      right:0px;
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
          transition: all 300ms;
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

let user;
const Header = (props) => {
	const [login, setLogin] = useState(false);
	const [keyword, setKeyword] = useState("");

	useEffect(() => {
    user = JSON.parse(window.sessionStorage.getItem("user"));
    console.log(user)
		if (user) {
			setLogin(true);
		} else {
			setLogin(false);
		}
		if (props.location.pathname === "/search"
			&& window.location.href.split("=")[1]) {
			setKeyword(decodeURIComponent(window.location.href.split("=")[1]))
		}
	}, [props.location.pathname]);

	const logOut = () => {
		window.sessionStorage.clear();
		setLogin(false);
	};

	const onClickCategory = (element) => {
		if (props.location.pathname === "/search") {
			api.get(`/product/search?q=${element}`).then((res) => {
				props.setProducts(res.data);
			});
		}
		props.history.push(`/search?q=${element}`);
	};

	const searchKeyPress = () => {
		if (
			window.event.keyCode === 13 &&
			keyword !== "" &&
			!/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(keyword)
		) {
			if (props.location.pathname === "/search") {
				api.get(`product/search?q=${keyword}`).then((res) => {
					props.setProducts(res.data);
				});
			}
			props.history.push(`/search?q=${keyword}`);
		}
	};

	return (
		<Headers>
			<div className="container">
				<Link to="/">
					{
						// 로고 클릭시 메인으로 이동
					}
					<img src="/img/logo.svg" alt="로고"/>
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
						<img src="/img/search-icon.svg" alt="search"/>
					</label>
				</div>

				{login ? ( //로그인 여부확인
					<MyDrop localID={user.nick_name}></MyDrop>
				) : (
					<section className="log">
						<Link to="/login">
							<div className="logIn">
								<div>로그인</div>
							</div>
						</Link>
					</section>
				)}
				{login ? (<TotalMenu logOut={logOut} login={login} onClick={onClickCategory}/>):(
					<section className="register">
          <Link to="/register">
            <div className="logIn">
              <div>회원가입</div>
            </div>
          </Link>
        </section>
        )}
			</div>
		</Headers>
	);
};

export default withRouter(Header);
