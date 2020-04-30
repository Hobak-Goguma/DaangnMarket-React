import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import Header from "../Header";

function Register({ history }) {
  const [birthFocus, setBirthFocus] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [IDFocusMode, setIDFocusMode] = useState(false);
  const [PWFocusMode, setPWFocusMode] = useState(false);
  const [PWConfirmFocusMode, setPWConfirmFocusMode] = useState(false);
  const [guideIDFirstClass, setGuideIDFirstClass] = useState("guide-id-first1");
  const [guidePWFirstClass, setGuidePWFirstClass] = useState("guide-pw-first1");
  const [guidePWSecondClass, setGuidePWSecondClass] = useState(
    "guide-pw-second1"
  );
  const [guidePWThirdClass, setGuidePWThirdClass] = useState("guide-pw-third1");
  const [guidePWCFirstClass, setGuidePWCFirstClass] = useState(
    "guide-pwc-first1"
  );
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const [PWConfirm, setPWConfirm] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [email, setEmail] = useState("");
  const [cellPhone, setCellphone] = useState("");
  const [address, setAddress] = useState("서울특별시 강북구 4.19로2길");
  const [sex, setSex] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birth, setBirth] = useState("");
  const [necessary1, setNecessary1] = useState("");
  const [necessary2, setNecessary2] = useState("");
  const [necessary3, setNecessary3] = useState("");
  const [necessaryAll, setNecessaryAll] = useState("");
  const [again, setAgain] = useState(false);
  const [infoChecked, setInfoChecked] = useState(false);
  const [allAgree, setAllAgree] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const outBirthFocus = () => {
    setBirthFocus(false);
  };
  const onBirthFocus = () => {
    setBirthFocus(true);
  };

  function man() {
    let sexBullion = document.getElementsByClassName("sex-bullion");
    if (sexBullion[0].checked === true) {
      setSex(sexBullion[0].value);
    }
  }
  function woman() {
    let sexBullion = document.getElementsByClassName("sex-bullion");
    if (sexBullion[1].checked === true) {
      setSex(sexBullion[1].value);
    }
  }
  function nothing() {
    let sexBullion = document.getElementsByClassName("sex-bullion");
    if (sexBullion[2].checked === true) {
      setSex(sexBullion[2].value);
    }
  }
  function necessaryOne() {
    let nece1 = document.getElementsByClassName("nece1");
    if (nece1[0].checked === true) {
      setNecessary1(true);
    } else {
      setNecessary1(false);
    }
    if (necessary1 === true && necessary2 === true && necessary3 === true) {
      setNecessaryAll(true);
    } else {
      setNecessaryAll(false);
    }
  }
  function necessaryTwo() {
    let nece2 = document.getElementsByClassName("nece2");
    if (nece2[0].checked === true) {
      setNecessary2(true);
    } else {
      setNecessary2(false);
    }
    if (necessary1 === true && necessary2 === true && necessary3 === true) {
      setNecessaryAll(true);
    } else {
      setNecessaryAll(false);
    }
  }
  function necessaryThree() {
    let nece3 = document.getElementsByClassName("nece3");
    if (nece3[0].checked === true) {
      setNecessary3(true);
    } else {
      setNecessary3(false);
    }
    if (necessary1 === true && necessary2 === true && necessary3 === true) {
      setNecessaryAll(true);
    } else {
      setNecessaryAll(false);
    }
  }

  function IDPopup() {
    setIDFocusMode(true);
  }
  function PWPopup() {
    setPWFocusMode(true);
  }
  function PWConfirmPopup() {
    setPWConfirmFocusMode(true);
  }
  function handleID(e) {
    setID(e.target.value);

    if (e.target.value.length < 6) {
      setGuideIDFirstClass("guide-id-first2");
    } else if (e.target.value.length >= 6) {
      setGuideIDFirstClass("guide-id-first3");
    }
  }
  function handlePW(e) {
    setPW(e.target.value);

    if (e.target.value.length >= 10) {
      setGuidePWFirstClass("guide-pw-first2");
    } else {
      setGuidePWCFirstClass("guide-pw-first1");
    }

    let checkNum = /[0-9]/;
    let checkEng = /[a-zA-Z]/;
    let checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;

    if (
      (checkNum.test(e.target.value) && checkEng.test(e.target.value)) ||
      (checkEng.test(e.target.value) && checkSpc.test(e.target.value)) ||
      (checkSpc.test(e.target.value) && checkNum.test(e.target.value))
    ) {
      setGuidePWSecondClass("guide-pw-second2");
    } else {
      setGuidePWSecondClass("guide-pw-second1");
    }

    if (/(\d)\1\1/.test(e.target.value)) {
      setGuidePWThirdClass("guide-pw-third2");
    } else {
      setGuidePWThirdClass("guide-pw-third1");
    }
  }
  function handlePWConfirm(e) {
    setPWConfirm(e.target.value);
    if (PW === e.target.value) {
      setGuidePWCFirstClass("guide-pwc-first2");
    }
  }
  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleCellPhone(e) {
    setCellphone(e.target.value);
  }
  function yearLimit(e) {
    if (e.target.value <= 9999) {
      setYear(e.target.value);
    }
  }
  function monthLimit(e) {
    if (e.target.value <= 99) {
      setMonth(e.target.value);
    }
  }
  function dayLimit(e) {
    if (e.target.value <= 99) {
      setDay(e.target.value);
      setBirth(`${year} ${month} ${e.target.value}` * 1);
    }
  }
  // function neceAll() {
  //   if (necessary1 === true && necessary2 === true && necessary3 === true) {
  //     setNecessaryAll(true);
  //   } else {
  //     setNecessaryAll(false);
  //   }
  // }

  function goHome() {
    history.push("/");
  }
  // function goJoinComplete() {
  //   props.history.push("/joincomplete");
  // }
  function infoCheck() {
    let infoShare = document.getElementsByClassName("info-share");
    if (infoShare[0].checked === true) {
      setInfoChecked(true);
    } else {
      setInfoChecked(false);
    }
  }
  function goSorry() {
    alert("기술상의 이유로 접속불가 합니다. \n내년에 시도하여 주십시오.");
  }
  function IDDuplication() {
    console.log("something");
    // fetch(`${API_JONG}/users/check-account`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     account: this.state.ID,
    //   }),
    // })
    //   .then((response) => {
    //     console.log(response);
    //     if (response.status === 200) {
    //       alert("사용할수 있는 ID입니다!");
    //     } else {
    //       alert("사용할수 없는 ID입니다!");
    //     }
    //     console.log(response.data);
    //     return response;
    //   })
    //   .then((response) => {});
  }
  function emailDuplication() {
    console.log("something");
    // fetch(`${API_JONG}/users/check-email`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: this.state.email
    //   })
    // })
    //   .then(response => {
    //     console.log(response);
    //     if (response.status === 200) {
    //       alert("사용할수 있는 이메일입니다!");
    //     } else {
    //       alert("사용할수 없는 이메일입니다!");
    //     }
    //     console.log(response.data);
    //     return response;
    //   })
    //   .then(response => {});
    // console.log("email 중복확인 ", this.state.ID);
  }
  function agreeAll() {
    setAllAgree(!allAgree);
  }

  async function joinFetch() {
    // const post = await fetch(`${API_JONG}/users/sign-up`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     account: this.state.ID,
    //     password: this.state.PW,
    //     name: this.state.name,
    //     email: this.state.email,
    //     phone: this.state.cellPhone,
    //     gender: this.state.sex,
    //     birthday: this.state.birth,
    //     address: this.state.address
    //   })
    // });
    // const postJSON = await post.json();
    // if (post.status === 200) {
    //   alert("회원가입을 축하드립니다! \n당신의 일상에 컬리를 더해보세요");
    //   this.props.history.push("/joincomplete", { state: postJSON.data });
    // } else {
    //   alert("올바른 가입정보를 기입하여, \n다시 시도하여 주십시오!");
    // }
    console.log("something");
  }

  return (
    <RegisterStyleComponent>
      <form action="">
        <Header />
        <div className="join-start">
          <div className="contents">
            <div className="page-location">
              <div className="home-menu" onClick={goHome}>
                홈
              </div>
              <span className="page-symbol"> > </span>
              <strong>회원가입</strong>
            </div>

            <div className="page-article2">
              <div className="head-section">
                <h2 className="join-title">회원가입</h2>
              </div>
              <div className="head-notification1" style={{ marginBottom: 10 }}>
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
                            onFocus={IDPopup}
                            onChange={handleID}
                            value={ID}
                            required
                          ></input>
                          <div
                            className="normal-button colbutton"
                            onClick={IDDuplication}
                          >
                            중복확인
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {IDFocusMode === true ? (
                  <table>
                    <tbody>
                      <tr className="guide-tr">
                        <td className="give-number col1"></td>
                        <td className="give-number col2">
                          <div className="col2-2">
                            <div className="guide-box">
                              <div className={guideIDFirstClass}>
                                6자 이상의 영문 혹은 영문과 숫자를 조합
                              </div>
                              <div className="guide-id-second">
                                아이디 중복확인
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}

                <table>
                  <tbody>
                    <tr>
                      <td className="col1">비밀번호*</td>
                      <td className="col2">
                        <input
                          className="typing"
                          type={passwordShown ? "text" : "password"}
                          placeholder="비밀번호를 입력해주세요"
                          onFocus={PWPopup}
                          onChange={handlePW}
                          value={PW}
                          required
                        ></input>
                        {passwordShown ? (
                          <i
                            className="fa fa-eye-slash password-icon"
                            onClick={togglePasswordVisibility}
                          />
                        ) : (
                          <i
                            className="fa fa-eye password-icon"
                            onClick={togglePasswordVisibility}
                          />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {PWFocusMode === true ? (
                  <table>
                    <tbody>
                      <tr className="guide-tr">
                        <td className="give-number col1"></td>
                        <td className="give-number col2">
                          <div className="col2-2">
                            <div className="guide-box">
                              <div className={guidePWFirstClass}>
                                10자 이상 입력
                              </div>
                              <div className={guidePWSecondClass}>
                                영문/숫자/특수문자(공백제외)만 허용하며, 2개이상
                                조합
                              </div>
                              <div className={guidePWThirdClass}>
                                동일한 숫자 3개 이상 연속 사용 불가
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}
                <table>
                  <tbody>
                    <tr>
                      <td className="col1">비밀번호확인*</td>
                      <td className="col2">
                        <input
                          className="typing"
                          type="password"
                          placeholder="비밀번호를 한번 더 입력해주세요"
                          onFocus={PWConfirmPopup}
                          onChange={handlePWConfirm}
                          value={PWConfirm}
                          required
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {PWConfirmFocusMode === true ? (
                  <table>
                    <tbody>
                      <tr className="guide-tr-pwc">
                        <td className="give-number col1"></td>
                        <td className="give-number col2-pwc">
                          <div className="col2-2">
                            <div className="guide-box">
                              <div className={guidePWCFirstClass}>
                                동일한 비밀번호를 입력해주세요
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : null}
                <table>
                  <tbody>
                    <tr>
                      <td className="name col1">이름*</td>
                      <td className="name col2">
                        <input
                          className="typing"
                          type="text"
                          placeholder="고객님의 이름을 입력해주세요"
                          onChange={handleName}
                          value={name}
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
                            type="text"
                            placeholder="예: danggn@danggn.com"
                            onChange={handleEmail}
                            required
                          ></input>
                          <div
                            className="normal-button colbutton"
                            onClick={emailDuplication}
                          >
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
                            onChange={handleCellPhone}
                            required
                          ></input>
                          <div
                            className="normal-button-gray colbutton"
                            onClick={goSorry}
                          >
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
                          <input
                            className="typing"
                            type="text"
                            onChange={handleCellPhone}
                          ></input>
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
                      <td className="address2 col1">배송주소</td>
                      <td>
                        <div className="col2-2">
                          <div
                            className="normal-button address"
                            style={{ marginBottom: 10 }}
                          >
                            <span onClick={goSorry}>주소 검색</span>
                          </div>
                        </div>
                        <p className="address-hint">
                          배송가능여부를 확인할수 있습니다.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td className="sex col1">성별</td>
                      <td className="sex col2">
                        <label className="label-radio">
                          <input
                            className="sex-bullion"
                            type="radio"
                            name="sexBullion"
                            value="남성"
                            onChange={man}
                          ></input>
                          <span>남자</span>
                        </label>
                        <label className="label-radio">
                          <input
                            className="sex-bullion"
                            type="radio"
                            name="sexBullion"
                            value="여성"
                            onChange={woman}
                          ></input>
                          <span>여자</span>
                        </label>
                        <label className="label-radio">
                          <input
                            className="sex-bullion"
                            type="radio"
                            name="sexBullion"
                            value="선택안함"
                            onChange={nothing}
                          ></input>
                          <span>선택안함</span>
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
                          <div
                            className="birth-inputs col2"
                            onBlur={outBirthFocus}
                            style={
                              birthFocus
                                ? { border: "1px solid #000" }
                                : { border: "1px solid #ccc" }
                            }
                          >
                            <input
                              className="birth-input year"
                              placeholder="YYYY"
                              type="number"
                              maxLength="4"
                              onChange={yearLimit}
                              value={year}
                              onFocus={onBirthFocus}
                            ></input>
                            <span>/</span>
                            <input
                              className="birth-input month"
                              placeholder="MM"
                              maxLength="2"
                              onChange={monthLimit}
                              value={month}
                              onFocus={onBirthFocus}
                            ></input>
                            <span>/</span>
                            <input
                              className="birth-input day"
                              placeholder="DD"
                              maxLength="4"
                              onChange={dayLimit}
                              value={day}
                              onFocus={onBirthFocus}
                            ></input>
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
                  <h3 style={{ fontSize: 20, opacity: 0.6 }}>이용약관동의*</h3>
                  <p className="agree-note">
                    선택항목에 동의하지 않은 경우도 회원가입 및 일반적인
                    서비스를 이용할 수 있습니다.
                  </p>
                </div>
                <div className="agree-neck">
                  <label>
                    <input type="checkbox"></input>
                    <span
                      className="agree-explanation"
                      onClick={agreeAll}
                      id="checkAll"
                    >
                      전체동의
                    </span>
                  </label>
                </div>
                <div className="agree-body">
                  <div className="agree-body-line">
                    <label>
                      <input
                        className="nece1"
                        type="checkbox"
                        onChange={necessaryOne}
                        name="checkRow"
                        required
                      ></input>
                      <span className="agree-explanation">
                        이용약관
                        <span className="agree-gray-guide">(필수)</span>
                      </span>
                      <div className="clasuse">약관보기></div>
                    </label>
                  </div>
                  <div className="agree-body-line">
                    <label>
                      <input
                        className="nece2"
                        type="checkbox"
                        onChange={necessaryTwo}
                        name="checkRow"
                        required
                      ></input>
                      <span className="agree-explanation">
                        개인정보처리방침
                        <span className="agree-gray-guide">(필수)</span>
                      </span>
                      <div className="clasuse">약관보기></div>
                    </label>
                  </div>
                  <div className="agree-body-line">
                    <label>
                      <input type="checkbox" name="checkRow"></input>
                      <span className="agree-explanation">
                        개인정보처리방침
                        <span className="agree-gray-guide">(선택)</span>
                      </span>
                      <div className="clasuse">약관보기></div>
                    </label>
                  </div>
                  <div className="agree-body-line">
                    <label>
                      <input
                        type="checkbox"
                        className="info-share"
                        onClick={infoCheck}
                        name="checkRow"
                      ></input>
                      <span className="agree-explanation">
                        무료배송, 할인쿠폰 등 혜택/정보 수신
                        <span className="agree-gray-guide">(선택)</span>
                      </span>
                    </label>

                    <div className="subscription">
                      <div className="subscript-detail">
                        <label>
                          <input
                            type="checkbox"
                            className="info-share"
                            name="checkRow"

                            // checked={state.infoChecked}
                          ></input>
                          <span className="agree-explanation">SMS</span>
                        </label>

                        <label>
                          <input
                            type="checkbox"
                            className="info-share"
                            name="checkRow"
                            // checked={state.infoChecked}
                          ></input>
                          <span className="agree-explanation">이메일</span>
                        </label>
                      </div>
                      <div className="benefit-info"></div>
                    </div>
                  </div>
                  <div className="agree-body-line">
                    <label>
                      <input
                        className="nece3"
                        type="checkbox"
                        onChange={necessaryThree}
                        name="checkRow"
                        required
                      ></input>
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
                  onClick={joinFetch}
                >
                  가입하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </RegisterStyleComponent>
  );
}

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

const RegisterStyleComponent = styled.div`
  overflow-x: hidden;
  background-color: #f9f9f9;

  tr,
  td,
  div,
  span,
  p {
    border: 0px solid #ff8a3d;
  }
  .col2 {
    position: relative;
  }
  .password-icon {
    position: absolute;
    top: 21px;
    left: 270px;
  }
  input {
    border-radius: 4px;
    border: 1px solid #ccc;

    &.typing {
      height: 42px;
      text-indent: 20px;
    }
    &[type="radio"],
    &[type="radio"]:checked {
      width: 16px;
      height: 16px;
    }
    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &::placeholder {
      color: #ccc;
    }
    &[type="checkbox"],
    &[type="checkbox"]:checked {
      width: 16px;
      height: 16px;
      border: 1px solid gray;
      border-radius: 2px;
      margin-top: 4px;
      z-index: 10;
    }
  }
  .nece1 {
    border: 1px solid gray;
  }
  .home-menu {
    cursor: pointer;
  }
  .page-article2 {
    width: 630px;
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
    background: #f9f9f9;
    font-size: 20px;
    margin: 0;
  }

  .page-location {
    margin: 0 auto;
    width: 1050px;
    padding-top: 26px;
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
  }
  .page-symbol {
    margin-left: 5px;
    margin-right: 5px;
  }

  .head-notification1 {
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    background: #f9f9f9;
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
    width: 119px;
    padding-left: 30px;
    font-size: 14px;
  }
  .col2 {
    width: 480px;
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
    margin-top: 15px;
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
  .sex.col2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 230px;
    margin-top: 17px;
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
    color: #5f0080;
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
    margin: 50px auto;
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
  .guide-id-first1 {
    font-size: 12px;
    color: #747774;
  }
  .guide-id-first2 {
    font-size: 12px;
    color: #b8534a;
  }
  .guide-id-first3 {
    font-size: 12px;
    color: green;
  }
  .guide-id-second {
    font-size: 12px;
    color: #747774;
  }
  .guidePWThirdClass {
    font-size: 12px;
    color: green;
  }
  .guide-pw-first1 {
    font-size: 12px;
    color: #b8534a;
  }
  .guide-pw-first2 {
    font-size: 12px;
    color: green;
  }
  .guide-pw-second1 {
    font-size: 12px;
    color: #b8534a;
  }
  .guide-pw-second2 {
    font-size: 12px;
    color: green;
  }
  .guide-pw-third1 {
    font-size: 12px;
    color: green;
  }
  .guide-pw-third2 {
    font-size: 12px;
    color: #b8534a;
  }
  .guide-pwc-first1 {
    font-size: 12px;
    color: #b8534a;
  }
  .guide-pwc-first2 {
    font-size: 12px;
    color: green;
  }
  .col2-pwc {
    display: flex;
    align-items: flex-start;
    margin-top: 0px;
  }
  .guide-tr-pwc {
    height: 30px;
  }

  .join-start {
    box-sizing: border-box;
    margin-top: 90px;

    .birth-inputs {
      transition: all 0.3s ease-in-out;
    }

    input {
      transition: all 0.3s ease-in-out;
      &:focus {
        border: 1px solid #000;
        outline: none;
      }
    }
    .birth-input {
      border: none;
      width: 95px;
      outline: none;
      &:focus {
        border: unset;
      }
      &::placeholder {
        text-align: center;
      }
    }
  }
`;
