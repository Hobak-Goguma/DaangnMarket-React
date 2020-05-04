import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Checkbox, Radio } from "@material-ui/core";
import styled, { css } from "styled-components";
import Layout from "../components/Layout";

const Register = ({ history }) => {
  const [inputState, setInputState] = useState({
    id: "",
    pw: "",
    name: "",
    pwConfirm: "",
    phone: "",
    gender: "",
    birth: "",
  });

  const [checkbox, setCheckbox] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
  });

  const handleInputState = (e) => {
    setInputState({
      [e.target.name]: e.target.value,
    });

    console.log(inputState.phone);

    // if (e.target.name === "birth") {
    //   setInputState({ [inputState.birth: Date(e.target.value) });
    // }
  };

  const handleCheckbox = (e) => {
    setCheckbox({
      ...checkbox,
      [e.target.name]: e.target.checked,
    });
  };

  const handleAllCheck = (e) => {
    setCheckbox({
      checkedA: e.target.checked,
      checkedB: e.target.checked,
      checkedC: e.target.checked,
      checkedD: e.target.checked,
      checkedE: e.target.checked,
      checkedF: e.target.checked,
      checkedG: e.target.checked,
    });
  };

  const fetchRegister = () => {
    fetch("http://bb00a631.ngrok.io/api/v1/members/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // mode: "no-cors",
      body: JSON.stringify({
        name: inputState.name,
        user_id: inputState.id,
        user_pw: inputState.pw,
        tel: inputState.phone,
        birth: "1994-03-30",
        email: inputState.email,
        gender: inputState.gender,
        add: "인천시몰라 내 주소가 뭔지",
        cdate: new Date(),
        udate: new Date(),
        last_date: new Date(),
      }),
    }).then((response) => {
      if (response.status === 200 || response.status === 201) {
        alert("정상 로그인 되었습니다");
        console.log(response);
        history.push("/");
      } else {
        alert("응, 틀렸어~");
      }
    });
  };

  const goHome = () => {
    history.push("/");
  };
  return (
    <Layout>
      <StyledRegister>
        <form>
          <div className="join-start">
            <div className="contents">
              <div className="page-location">
                <div className="home-menu" onClick={goHome}>
                  홈
                </div>
                <span className="gt-symbol">&gt;</span>
                <strong>회원가입</strong>
              </div>

              <div className="page-article2">
                <div className="head-section">
                  <h2 className="join-title">회원가입</h2>
                </div>
                <div
                  className="head-notification1"
                  style={{ marginBottom: 10 }}
                >
                  <p>*필수입력사항</p>
                </div>
                <div className="write-board2">
                  <div className="ghost-tr"></div>
                  <table>
                    <tbody>
                      <tr className="first-tr">
                        <td className="id-write col1">
                          <span>아이디*</span>
                        </td>
                        <td className="id-write col2">
                          <div className="col2-2">
                            <input
                              className="typing"
                              type="text"
                              placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                              onChange={handleInputState}
                              name="id"
                              required
                            ></input>
                            <div className="normal-button colbutton">
                              중복확인
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td className="col1">비밀번호*</td>
                        <td className="col2">
                          <input
                            className="typing"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            onChange={handleInputState}
                            name="pw"
                            required
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td className="col1">비밀번호확인*</td>
                        <td className="col2">
                          <input
                            className="typing"
                            type="password"
                            placeholder="비밀번호를 한번 더 입력해주세요"
                            onChange={handleInputState}
                            name="pwConfirm"
                            required
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td className="name col1">이름*</td>
                        <td className="name col2">
                          <input
                            className="typing"
                            type="text"
                            placeholder="고객님의 이름을 입력해주세요"
                            onChange={handleInputState}
                            name="name"
                            required
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td className="email col1">이메일*</td>
                        <td className="email col2">
                          <div className="col2-2">
                            <input
                              className="typing"
                              type="email"
                              placeholder="예: ID@daangn.com"
                              onChange={handleInputState}
                              name="email"
                              required
                            ></input>
                            <div className="normal-button colbutton">
                              이메일 중복확인
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td className="cell col1">휴대폰*</td>
                        <td className="cell col2">
                          <div className="col2-2">
                            <input
                              className="typing"
                              type="number"
                              placeholder="숫자만 입력해주세요"
                              onChange={handleInputState}
                              onKeyDown={(e) =>
                                e.keyCode === 69 && e.preventDefault()
                              }
                              name="phone"
                              required
                            ></input>
                            <div className="normal-button-gray colbutton">
                              인증번호받기
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td className="give-number col1"></td>
                        <td className="give-number col2">
                          <div className="col2-2">
                            <input className="typing" />
                            <div className="normal-button-white colbutton">
                              인증번호 확인
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td className="address2 col1">주소</td>
                        <td>
                          <div className="col2-2">
                            <div className="normal-button address">
                              <span>동네 검색</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td className="gender col1">성별</td>
                        <td className="gender col2">
                          <label className="label-radio">
                            <Radio
                              checked={inputState.gender === "male"}
                              size="small"
                              value="male"
                              style={{ color: "#ff8a3d" }}
                              onChange={handleInputState}
                              name="gender"
                            />
                            <span>남자</span>
                          </label>
                          <label className="label-radio">
                            <Radio
                              checked={inputState.gender === "female"}
                              value="female"
                              size="small"
                              style={{ color: "#ff8a3d" }}
                              onChange={handleInputState}
                              name="gender"
                            />
                            <span>여자</span>
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr className="birth-tr">
                        <td className="birth col1">생년월일</td>
                        <td>
                          <div className="birth col2">
                            <div className="col2">
                              <input
                                placeholder="생년월일 6자 입력해주세요"
                                type="text"
                                className="typing"
                                name="birth"
                                // onChange={handleInputState}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr className="ghost-tr">
                        <td className="birth col1"></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="agree-board">
                  <div className="agree-head">
                    <h3 style={{ fontSize: 20, opacity: 0.6 }}>
                      이용약관동의*
                    </h3>
                    <p className="agree-note">
                      선택항목에 동의하지 않은 경우도 회원가입 및 일반적인
                      서비스를 이용할 수 있습니다.
                    </p>
                  </div>
                  <div className="agree-neck">
                    <label>
                      <Checkbox
                        style={{ color: "#ff8a3d" }}
                        size="small"
                        onChange={handleAllCheck}
                      />
                      <span className="agree-explanation" id="checkAll">
                        전체동의
                      </span>
                    </label>
                  </div>
                  <div className="agree-body">
                    <div className="agree-body-line">
                      <label>
                        <Checkbox
                          checked={checkbox.checkedA}
                          style={{ color: "#ff8a3d" }}
                          size="small"
                          onChange={handleCheckbox}
                          name="checkedA"
                        />
                        <span className="agree-explanation">
                          이용약관
                          <span className="agree-gray-guide">(필수)</span>
                        </span>
                        <div className="clasuse">약관보기</div>
                      </label>
                    </div>
                    <div className="agree-body-line">
                      <label>
                        <Checkbox
                          checked={checkbox.checkedB}
                          style={{ color: "#ff8a3d" }}
                          size="small"
                          onChange={handleCheckbox}
                          name="checkedB"
                        />
                        <span className="agree-explanation">
                          개인정보처리방침
                          <span className="agree-gray-guide">(필수)</span>
                        </span>
                        <div className="clasuse">약관보기</div>
                      </label>
                    </div>
                    <div className="agree-body-line">
                      <label>
                        <Checkbox
                          checked={checkbox.checkedC}
                          style={{ color: "#ff8a3d" }}
                          size="small"
                          onChange={handleCheckbox}
                          name="checkedC"
                        />
                        <span className="agree-explanation">
                          개인정보처리방침
                          <span className="agree-gray-guide">(선택)</span>
                        </span>
                        <div className="clasuse">약관보기</div>
                      </label>
                    </div>
                    <div className="agree-body-line">
                      <label>
                        <Checkbox
                          checked={checkbox.checkedD}
                          style={{ color: "#ff8a3d" }}
                          size="small"
                          onChange={handleCheckbox}
                          name="checkedD"
                        />
                        <span className="agree-explanation">
                          무료배송, 할인쿠폰 등 혜택/정보 수신
                          <span className="agree-gray-guide">(선택)</span>
                        </span>
                      </label>

                      <div className="subscription">
                        <div className="subscript-detail">
                          <label>
                            <Checkbox
                              checked={checkbox.checkedE}
                              style={{ color: "#ff8a3d" }}
                              size="small"
                              onChange={handleCheckbox}
                              name="checkedE"
                            />
                            <span className="agree-explanation">SMS</span>
                          </label>

                          <label>
                            <Checkbox
                              checked={checkbox.checkedF}
                              style={{ color: "#ff8a3d" }}
                              size="small"
                              onChange={handleCheckbox}
                              name="checkedF"
                            />
                            <span className="agree-explanation">이메일</span>
                          </label>
                        </div>
                        <div className="benefit-info"></div>
                      </div>
                    </div>
                    <div className="agree-body-line">
                      <label>
                        <Checkbox
                          checked={checkbox.checkedG}
                          style={{ color: "#ff8a3d" }}
                          size="small"
                          onChange={handleCheckbox}
                          name="checkedG"
                        />
                        <span className="agree-explanation">
                          본인은 만 14세 이상입니다.
                          <span className="agree-gray-guide">(필수)</span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="ghost-tr"></div>
                </div>
                <div className="final-join">
                  <button
                    type="button"
                    className="final-button-join"
                    onClick={fetchRegister}
                  >
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

export default withRouter(Register);

const defaultButtonStyle = css`
  width: 150px;
  height: 40px;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  align-content: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRegister = styled.div`
  tr,
  td,
  div,
  span,
  p {
    border: 0px solid #ff8a3d;
  }

  input {
    border-radius: 4px;
    border: 1px solid #ccc;

    &.typing {
      height: 42px;
      text-indent: 20px;
    }

    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &::placeholder {
      color: #ccc;
    }
  }

  .home-menu {
    letter-spacing: 0;
    cursor: pointer;
  }
  .page-article2 {
    width: 660px;
    margin: 0 auto;
  }
  .write-board2 {
    background: #fff;
  }
  .agree-board {
    background: #fff;
  }
  .contents {
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
    /* background: #f9f9f9; */
    font-size: 20px;
    margin: 0;
  }

  .gt-symbol {
    line-height: 1;
    margin: 0 5px;
  }

  .page-location {
    margin: 0 auto;
    width: 1050px;
    padding-top: 26px;
    display: flex;
    color: #4c4c4c;
    justify-content: flex-end;
    font-size: 12px;
    letter-spacing: -0.6px;
  }

  .head-notification1 {
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    background: #f9f9f9;
    opacity: 0.8;
  }
  .ghost-tr {
    height: 20px;
  }
  tr {
    height: 60px;
  }
  td {
    vertical-align: middle;
  }
  .col1 {
    width: 120px;
    padding-left: 30px;
    font-size: 14px;
    font-weight: bold;
    opacity: 0.8;
  }
  .head-section {
    background: #f9f9f9;
  }
  .final-join {
    background: #f9f9f9;
  }

  .birth-input {
    width: 80px;
    text-align: center;
  }
  .birth-inputs {
    width: 300px;
    display: flex;
    justify-content: center;
  }

  .typing {
    width: 300px;
    height: 40px;
  }

  .normal-button,
  .normal-button-gray,
  .normal-button-white {
    ${defaultButtonStyle}
    background: #ff8a3d;
  }
  .normal-button-gray {
    background: #ddd;
  }
  .normal-button-white {
    color: #ddd;
    background: #fff;
    border: 1px solid #ddd;
  }
  .col2-2 {
    display: flex;
    align-items: center;
  }
  .address {
    cursor: pointer;
  }
  .address-hint {
    font-size: 12px;
    color: gray;
  }

  .birth-inputs {
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 300px;
    height: 40px;

    .birth-input:focus .birth-inputs {
      border: 1px solid #000;
    }
  }
  .benefit-info {
    width: 323px;
    height: 30px;
  }
  .colbutton {
    margin-left: 10px;
    cursor: pointer;
  }
  .address2 {
    display: flex;
    align-items: flex-start;
    margin-top: 24px;
  }
  .gender.col2 {
    margin-left: -8px;
    display: flex;
    justify-content: space-between;
    width: 160px;
    margin-top: 10px;
  }
  .extra.col2 {
    width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .ghost-tr {
    height: 20px;
  }
  .agree-board {
    margin-top: 15px;
    padding-top: 25px;
  }
  .agree-head {
    display: flex;
    justify-content: left;
    margin-left: 30px;
    margin-bottom: 15px;
  }
  .agree-note {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-left: 10px;
    color: gray;
  }
  .agree-neck {
    margin-left: 30px;
    margin-bottom: 20px;
    font-weight: bold;
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
    margin-top: 90px;

    input {
      &:focus {
        border: 1px solid #000;
        outline: none;
      }
    }
  }
`;
