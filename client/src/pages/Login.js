import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

function Login(props) {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  function handleID(e) {
    setID(e.target.value);

    console.log(e.target.value);
  }
  function handlePW(e) {
    setPW(e.target.value);

    console.log(e.target.value);
  }
  function loginFetch() {
    if (ID === "admin" && PW === "0000") {
      props.history.push("/");
    }
    // fetch(`${API_JONG}/users/sign-in`, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     account: this.state.ID,
    //     password: this.state.PW,
    //   }),
    // })
    //   .then((response) => {
    //     // console.log(response);
    //     // console.log(response.status);
    //     if (response.status === 200) {
    //       alert("정상 로그인 되었습니다");
    //       console.log(response);
    //       this.props.history.push("/");
    //     } else {
    //       console.log(this.props);
    //       alert("아이디 또는 비밀번호 오류입니다!");
    //       console.log(response);
    //       // this.props.history.push("/login");
    //     }
    //     console.log(response, response.json);
    //     return response.json();
    //     //response.json으로 하면 에러나서 json을 없애버림. 그런데 갑자기 붙여도 됨.
    //   })
    //   .then((response) => {
    //     if (response.token) {
    //       localStorage.setItem("wetoken", response.token);
    //     }
    //   });
    // //토큰이 있으면 로컬에 저장하기
    // console.log(
    //   "account는 ",
    //   this.state.ID,
    //   "이고",
    //   "password는 ",
    //   this.state.PW
    // );
  }
  function goRegister() {
    props.history.push("/login");
  }
  return (
    <>
      <Header />
      <LoginOuter>
        <div className="contents">
          <div className="login-top">로그인</div>
          <div className="input-area">
            <input
              className="id"
              placeholder="아이디를 입력해주세요"
              onChange={handleID}
            ></input>
          </div>
          <div className="input-area">
            <input
              className="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePW}
            ></input>
          </div>
          <div>
            <div className="finding">
              <span>아이디찾기</span>
              <span className="line"></span>
              <span>비밀번호찾기</span>
            </div>
          </div>
          <div className="button">
            <div className="login-button" onClick={loginFetch}>
              로그인
            </div>
          </div>
          <div className="button">
            <div className="register-button" onClick={goRegister}>
              회원가입
            </div>
          </div>
        </div>
      </LoginOuter>
    </>
  );
}

export default withRouter(Login);

const LoginOuter = styled.div`
  div,
  span,
  p,
  label {
    border: unset;
  }
  box-sizing: border-box;

  .contents {
    width: 340px;
    margin: 15rem auto;
  }

  .login-top {
    font-size: 20px;
    font-weight: 800;
    display: flex;
    justify-content: center;

    margin: 35px 0;
  }
  .input-area {
    display: flex;
    justify-content: center;
  }
  .id,
  .password {
    width: 340px;
    height: 54px;
    border-radius: 4px;
    border: 1px solid #cfcccf;
    margin-bottom: 10px;
    ::placeholder {
      font-weight: bold;
      color: #cfcccf;
    }
  }
  .line {
    border-right: 1px solid black;
    height: 10px;
    margin: auto 4px;
  }
  .finding {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 30px;
    font-size: 12px;
  }
  .button {
    display: flex;
    justify-content: center;
  }
  .login-button,
  .register-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 340px;
    height: 52px;
    margin-bottom: 10px;
    background-color: #ff8a3d;
    color: #fff;
    cursor: pointer;
  }
  .register-button {
    color: #ff8d3d;
    background-color: unset;
    border: 1px solid #ff8a3d;
  }
  input {
    &:focus {
      border-color: #000;
      outline: none;
    }
    text-indent: 20px;
  }
`;
