import Layout from "../../../components/Layout";
import React, { useState } from "react";
import api from "../../../common/api";
import styled from "styled-components";
import Userform from "../components/Userform";

const StyledRegister = styled.div`
  .wrong-txt {
    color: orange;
    font-size: 12px;
    line-height: 1.4;
  }
  .correct-txt {
    color: green;
    font-size: 12px;
  }

  tr,
  td,
  div,
  span,
  p {
    border: 0px solid #ff8a3d;
  }
  .page-article2 {
    width: 660px;
    margin: 0 auto;
  }
  .agree-board {
    background: #fff;
  }
  .contents {
    padding-top: 90px;
    background: #f9f9f9;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  /* Register Style */

  .head-section {
    background: #f9f9f9;
  }

  .join-title {
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin: 0;
  }
  .head-notification1 {
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    background: #f9f9f9;
    opacity: 0.8;
  }
  tr {
    height: 60px;
  }
  td {
    vertical-align: middle;
  }
  .head-section {
    background: #f9f9f9;
  }
  .final-join {
    background: #f9f9f9;
  }


  .normal-button-gray {
    background: #ddd;
  }
  .normal-button-white {
    color: #ddd;
    background: #fff;
    border: 1px solid #ddd;
  }
  .benefit-info {
    width: 323px;
    height: 30px;
  }
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .agree-board {
    margin-top: 15px;
    padding-top: 25px;
    input[type="checkbox"]{
      display: none;
    }
    input[type="checkbox"] + label.checkbox {
      box-sizing: border-box;
      display: inline-block; 
      border : 1.5px solid rgb(255, 138, 61);
      width:1em; 
      height: 1em; 
      cursor: pointer; 
      border-radius: 3px;
      float: right;
    }
    input[type="checkbox"]:checked + label.checkbox {
      background : rgb(255, 138, 61);
      background-image: url("/")
    }
    input[type="checkbox"]:checked + label.checkbox::before {
      content:"";
      height:2px;
      width: 0.707em;
      background:#fff;
    }
    .agree-head {
      display: flex;
      justify-content: left;
      margin-left: 30px;
      margin-bottom: 15px;
    }
    .agree-neck {
      margin : 50px 0 50px 30px;
      font-weight: bold;
    }
    .agree-note {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-left: 10px;
      color: gray;
    }
  }
  .agree-explanation {
    margin-left: 5px;
  }
  .agree-gray-guide {
    color: gray;
    margin-left: 2px;
  }
  .clasuse {
    margin-left: 20px;
    color: #ff8a3d;
  }
  .agree-body {
    margin-left: 60px;
  }
  .agree-body-line {
    margin-bottom: 10px;
    font-size: 14px;
  }
  .subscription {
    margin-left: 22px;
    font-size: 14px;
  }
  .subscript-detail {
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 14px;
  }
  .final-join {
    display: flex;
    justify-content: center;
    margin: 50px auto 0;
    padding-bottom: 50px;
  }
  .final-button-join {
    width: 340px;
    height: 54px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    background-color: #ff8a3d;
    border-radius: 7px;
    border: 0px;
    cursor: pointer;
  }

  .join-start {

    input {
      &:focus {
        border: 1px solid #000;
        outline: none;
      }
    }
  }
`;
const RegisterPage = ({history}) => {  
  // Regex stuff

  const [inputState, setInputState] = useState({
    id: "",
    pw: "",
    name: "",
    pwConfirm: "",
    phone: "",
    gender: "",
    birth: "",
    email: "",
  });
  const [checkValidation, setCheck] = useState({
    sameId : false,
    id : false,
    pw : false,
    samePw: false,
    validation : false,
    gender : false,
    checkbox: false,
    name : false,
  });
  
  const [checkbox, setCheckbox] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
  });

  const handleCheckbox = (e) => {
    if(e.target.id !== "checkedD"){
      setCheckbox({
        ...checkbox,
        [e.target.id]: e.target.checked,
      });
    }else{
      setCheckbox({
        ...checkbox,
        checkedE: e.target.checked,
        checkedF: e.target.checked
      });
    }
  };
  const handleAllCheck = (e) => {
    setCheckbox({
      checkedA: e.target.checked,
      checkedB: e.target.checked,
      checkedC: e.target.checked,
      checkedE: e.target.checked,
      checkedF: e.target.checked,
      checkedG: e.target.checked,
    });
  };

  const fetchRegister = () => {
    if (
      // isIdDuplicate &&
      inputState.id.length > 5 &&
      /[0-9]/.test(inputState.id) &&
      /[a-zA-Z]/.test(inputState.id) &&
      // !regexKor.test(inputState.id) &&
      // regexPw.test(inputState.pw) &&
      // !regexKor.test(inputState.pw) &&
      inputState.pw === inputState.pwConfirm &&
      inputState.name.length > 1 &&
      // regexEmail.test(inputState.email) &&
      // regexPhone.test(inputState.phone) &&
      inputState.gender !== "" &&
      // regexBirth.test(inputState.birth) &&
      checkbox.checkedA &&
      checkbox.checkedB &&
      checkbox.checkedG
    ) {
      api
        .post("/member", {
          name: inputState.name,
          nick_name: inputState.name,
          user_id: inputState.id,
          user_pw: inputState.pw,
          tel: inputState.phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
          birth: inputState.birth.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"),
          email: inputState.email,
          gender: inputState.gender,
        })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            alert("회원가입 되었습니다.");
            history.push("/login");
          } else {
            alert("안된다 ㅜㅜ");
            // if (!isIdDuplicate) {
            //   alert("아이디 중복확인 하였는지 확인해주세요!");
            // }
          }
        });
    } else {
      alert("양식에 맞게 작성하였는지 다시한번 확인해 주세요");
    }
  };
  return (
    <Layout>
    <StyledRegister>
    <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <div className="join-start">
        <div className="contents">

          <div className="page-article2">
            <div className="head-section">
              <h2 className="join-title">회원가입</h2>
            </div>
            <div className="head-notification1" style={{ marginBottom: 10 }}>
              <p>*필수입력사항</p>
            </div>
            <Userform
            history ={history}
            inputState = {inputState}
            setInputState ={setInputState}
            setCheck={setCheck}
            checkValidation ={checkValidation}
            />
            <div className="agree-board">
              <div className="agree-head">
                <h3 style={{ fontSize: 20, opacity: 0.6 }}>이용약관동의*</h3>
                <p className="agree-note">
                  선택항목에 동의하지 않은 경우도 회원가입 및 일반적인
                  서비스를 이용할 수 있습니다.
                </p>
              </div>
              <div className="agree-neck">
                <label>
                  <input type="checkbox"
                    style={{ color: "#ff8a3d" }}
                    size="small"
                    id ="checkAllbtn"
                    onChange={handleAllCheck}
                    checked={checkbox.checkedA && checkbox.checkedB && checkbox.checkedC
                    && (checkbox.checkedF || checkbox.checkedE) && checkbox.checkedG}
                  />
                  <label for="checkAllbtn" className="checkbox"></label>
                  <span className="agree-explanation" id="checkAll">
                    전체동의
                  </span>
                </label>
              </div>
              <div className="agree-body">
                <div className="agree-body-line">
                  <label>
                    <input type="checkbox"
                      checked={checkbox.checkedA}
                      style={{ color: "#ff8a3d" }}
                      size="small"
                      onChange={handleCheckbox}
                      id="checkedA"
                    />
                    <label for="checkedA" className="checkbox"></label>
                    <span className="agree-explanation">
                      이용약관
                      <span className="agree-gray-guide">(필수)</span>
                    </span>
                    <div className="clasuse">약관보기</div>
                  </label>
                </div>
                <div className="agree-body-line">
                  <label>
                    <input type="checkbox"
                      checked={checkbox.checkedB}
                      style={{ color: "#ff8a3d" }}
                      size="small"
                      onChange={handleCheckbox}
                      id="checkedB"
                    />
                    <label for="checkedB" className="checkbox"></label>
                    <span className="agree-explanation">
                      개인정보처리방침
                      <span className="agree-gray-guide">(필수)</span>
                    </span>
                    <div className="clasuse">약관보기</div>
                  </label>
                </div>
                <div className="agree-body-line">
                  <label>
                    <input type="checkbox"
                      checked={checkbox.checkedC}
                      style={{ color: "#ff8a3d" }}
                      size="small"
                      onChange={handleCheckbox}
                      id="checkedC"
                    />
                    <label for="checkedC" className="checkbox"></label>
                    <span className="agree-explanation">
                      개인정보처리방침
                      <span className="agree-gray-guide">(선택)</span>
                    </span>
                    <div className="clasuse">약관보기</div>
                  </label>
                </div>
                <div className="agree-body-line">
                  <label>
                    <input type="checkbox"
                      checked={checkbox.checkedE || checkbox.checkedF}
                      style={{ color: "#ff8a3d" }}
                      size="small"
                      onChange={handleCheckbox}
                      id="checkedD"
                    />
                    <label for="checkedD" className="checkbox"></label>
                    <span className="agree-explanation">
                      무료배송, 할인쿠폰 등 혜택/정보 수신
                      <span className="agree-gray-guide">(선택)</span>
                    </span>
                  </label>

                  <div className="subscription">
                    <div className="subscript-detail">
                      <label>
                        <input type="checkbox"
                          checked={checkbox.checkedE}
                          style={{ color: "#ff8a3d" }}
                          size="small"
                          onChange={handleCheckbox}
                          id="checkedE"
                        />
                        <label for="checkedE" className="checkbox"></label>
                        <span className="agree-explanation">SMS</span>
                      </label>

                      <label>
                        <input type="checkbox"
                          checked={checkbox.checkedF}
                          style={{ color: "#ff8a3d" }}
                          size="small"
                          onChange={handleCheckbox}
                          id="checkedF"
                        />
                        <label for="checkedF" className="checkbox"></label>
                        <span className="agree-explanation">이메일</span>
                      </label>
                    </div>
                    <div className="benefit-info"></div>
                  </div>
                </div>
                <div className="agree-body-line">
                  <label>
                    <input type="checkbox"
                      checked={checkbox.checkedG}
                      style={{ color: "#ff8a3d" }}
                      size="small"
                      onChange={handleCheckbox}
                      id="checkedG"
                    />
                    <label for="checkedG" className="checkbox"></label>
                    <span className="agree-explanation">
                      본인은 만 14세 이상입니다.
                      <span className="agree-gray-guide">(필수)</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="final-join">
              <button className="final-button-join" onClick={fetchRegister}>
                가입하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </StyledRegister>
    </Layout>
  );
};

export default RegisterPage;
