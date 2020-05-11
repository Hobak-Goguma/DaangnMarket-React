import React, { useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import { Checkbox, Radio } from "@material-ui/core";
import styled, { css } from "styled-components";
import Layout from "../components/Layout";

const Register = ({ history }) => {
  const [visible, setVisible] = useState(false);

  let addrInput = useRef("");

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
  const [checkbox, setCheckbox] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
  });
  const regexBirth = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
  const regexEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
  const regexPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()_+|<>?:{}])[A-Za-z\d~!@#$%^&*()_+|<>?:{}]{8,}$/;
  const regexSpec = /[~!@#$%^&*()_+|<>?:{}]/;
  const regexPhone = /^\d{3}\d{3,4}\d{4}$/;
  const regexKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  console.log(inputState.birth.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));

  const handleInputState = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value.replace(/\s/, ""),
    });

    if (e.target.name === "birth" || e.target.name === "phone") {
      setInputState({
        ...inputState,
        [e.target.name]: e.target.value.replace(/[^0-9]/, ""),
      });
    }
    if (e.target.name === "name" || e.target.name === "id") {
      setInputState({
        ...inputState,
        [e.target.name]: e.target.value.replace(regexSpec, ""),
      });
    }
  };

  const fetchIdDuplication = () => {
    fetch(`http://28d6d1ad.ngrok.io/member/overlap/?user_id=${inputState.id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("중복확인이 완료되었습니다.");
        } else {
          alert("중복된 아이디가 있습니다.");
        }
      })
      // console.log 에 status error 안띄우기
      .catch((err) => {
        const mute = err;
      });
  };

  const handlePostCode = () => {
    setVisible(true);

    new window.daum.Postcode({
      oncomplete: function (data) {
        let addr = "";

        if (data.userSelectedType === "R") {
          addr = data.sido + " " + data.sigungu + " " + data.bname;
        } else {
          addr = data.sido + " " + data.sigungu + " " + data.bname;
        }

        addrInput.current.value = addr;
      },
    }).open({
      popupName: "postcodePopup",
    });
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
    if (
      inputState.id.length > 5 &&
      /[0-9]/.test(inputState.id) &&
      /[a-zA-Z]/.test(inputState.id) &&
      !regexKor.test(inputState.id) &&
      regexPw.test(inputState.pw) &&
      !regexKor.test(inputState.pw) &&
      inputState.pw === inputState.pwConfirm &&
      inputState.name.length > 1 &&
      regexEmail.test(inputState.email) &&
      regexPhone.test(inputState.phone) &&
      inputState.gender !== "" &&
      regexBirth.test(inputState.birth) &&
      checkbox.checkedA &&
      checkbox.checkedB &&
      checkbox.checkedG
    ) {
      fetch("http://c2388d02.ngrok.io/member/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputState.name,
          nick_name: inputState.id,
          user_id: inputState.id,
          user_pw: inputState.pw,
          tel: inputState.phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
          birth: inputState.birth.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"),
          email: inputState.email,
          gender: inputState.gender,
          add: addrInput.current.value,
          cdate: new Date(),
          udate: new Date(),
          last_date: new Date(),
        }),
      }).then((response) => {
        if (response.status === 200 || response.status === 201) {
          alert("회원가입 됨 ㅋ!");
        } else {
          alert("안된다 ㅜㅜ");
        }
      });
      alert("회원가입 되었습니다.");
      history.push("/");
    } else {
      alert("양식에 맞게 작성하였는지 다시한번 확인해 주세요");
      console.log(addrInput.current.value);
    }
  };

  return (
    <Layout>
      <StyledRegister>
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <div className="join-start">
            <div className="contents">
              <div className="page-location">
                <div className="home-menu" onClick={() => history.push("/")}>
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
                              maxLength="15"
                              value={inputState.id}
                            ></input>
                            <div
                              className="normal-button colbutton"
                              onClick={fetchIdDuplication}
                            >
                              중복확인
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr className="validate-tr">
                        <td className="col1"></td>
                        <td>
                          <div>
                            <div>
                              {inputState.id.length > 5 &&
                              /[0-9]/.test(inputState.id) &&
                              /[a-zA-Z]/.test(inputState.id) &&
                              !regexKor.test(inputState.id) ? (
                                <p className="correct-txt">
                                  아이디 형식에 맞습니다.
                                </p>
                              ) : (
                                inputState.id.length !== 0 && (
                                  <p className="wrong-txt">
                                    6자 이상의 영문 혹은 영문과 숫자의 조합
                                  </p>
                                )
                              )}
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
                            maxLength="18"
                            value={inputState.pw}
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table>
                    <tbody>
                      <tr className="validate-tr">
                        <td className="col1"></td>
                        <td>
                          <div>
                            <div>
                              {regexPw.test(inputState.pw) &&
                              !regexKor.test(inputState.pw) ? (
                                <p className="correct-txt">
                                  안전한 비밀번호 입니다.
                                </p>
                              ) : (
                                inputState.pw.length !== 0 && (
                                  <p className="wrong-txt">
                                    8자 이상 입력 <br />
                                    영문/숫자/특수문자만 허용하며, 모두 조합
                                  </p>
                                )
                              )}
                            </div>
                          </div>
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
                            maxLength="18"
                            value={inputState.pwConfirm}
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table>
                    <tbody>
                      <tr className="validate-tr">
                        <td className="col1"></td>
                        <td>
                          <div>
                            <div>
                              {inputState.pw === inputState.pwConfirm &&
                              inputState.pw.length !== 0 ? (
                                <p className="correct-txt">비밀번호 일치!</p>
                              ) : (
                                inputState.pwConfirm.length !== 0 && (
                                  <p className="wrong-txt">
                                    동일한 비밀번호를 입력해주세요
                                  </p>
                                )
                              )}
                            </div>
                          </div>
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
                            maxLength="15"
                            value={inputState.name}
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table>
                    <tbody>
                      <tr className="validate-tr">
                        <td className="col1"></td>
                        <td>
                          <div>
                            <div>
                              {inputState.name.length > 1 ? (
                                <p className="correct-txt">멋진 이름이군요!</p>
                              ) : (
                                inputState.name.length !== 0 && (
                                  <p className="wrong-txt">
                                    두글자 이상 입력해주세요.
                                  </p>
                                )
                              )}
                            </div>
                          </div>
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
                              maxLength="50"
                              value={inputState.email}
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
                      <tr className="validate-tr">
                        <td className="col1"></td>
                        <td>
                          <div>
                            <div>
                              {regexEmail.test(inputState.email) ? (
                                <p className="correct-txt">
                                  올바른 이메일 입니다.
                                </p>
                              ) : (
                                inputState.email.length !== 0 && (
                                  <p className="wrong-txt">
                                    이메일이 맞습니까?
                                  </p>
                                )
                              )}
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
                              type="text"
                              placeholder="숫자만 입력해주세요"
                              onChange={handleInputState}
                              value={inputState.phone}
                              name="phone"
                              required
                              maxLength="11"
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
                      <tr className="validate-tr">
                        <td className="col1"></td>
                        <td>
                          <div>
                            <div>
                              {regexPhone.test(inputState.phone) ? (
                                <p className="correct-txt">
                                  휴대폰 번호일 수도 있습니다.
                                </p>
                              ) : (
                                inputState.phone.length !== 0 && (
                                  <p className="wrong-txt">
                                    휴대폰 번호가 아닙니다.
                                  </p>
                                )
                              )}
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
                            <input className="typing" disabled />
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
                        <td className="address2 col1">주소*</td>
                        <td>
                          <div className="col2-2">
                            <div
                              className="normal-button address"
                              onClick={handlePostCode}
                            >
                              <span>동네 검색</span>
                            </div>
                          </div>
                          <p className="address-hint">
                            도로명을 선택하여도 지번(법정동/법정리) 까지
                            입력됩니다.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    style={visible ? { display: "block" } : { display: "none" }}
                  >
                    <tbody>
                      <tr>
                        <td className="address2 col1"></td>
                        <td>
                          <div className="col2-2">
                            <input
                              id="addrInput"
                              className="typing"
                              type="text"
                              disabled
                              ref={addrInput}
                              required
                            ></input>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table>
                    <tbody>
                      <tr>
                        <td className="gender col1">성별*</td>
                        <td className="gender col2">
                          <label className="label-radio">
                            <Radio
                              checked={inputState.gender === "MALE"}
                              size="small"
                              value="MALE"
                              style={{ color: "#ff8a3d" }}
                              onChange={handleInputState}
                              name="gender"
                            />
                            <span>남자</span>
                          </label>
                          <label className="label-radio">
                            <Radio
                              checked={inputState.gender === "FEMALE"}
                              value="FEMALE"
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
                        <td className="birth col1">생년월일*</td>
                        <td>
                          <div className="birth col2">
                            <div className="col2">
                              <input
                                placeholder="생년월일 8자 입력해주세요"
                                type="text"
                                className="typing"
                                name="birth"
                                onChange={handleInputState}
                                value={inputState.birth}
                                maxLength="8"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr className="validate-tr">
                        <td className="col1"></td>
                        <td>
                          <div>
                            <div>
                              {regexBirth.test(inputState.birth) ? (
                                <p className="correct-txt">
                                  올바른 생년월일이 맞습니다.
                                </p>
                              ) : (
                                inputState.birth.length !== 0 && (
                                  <p className="wrong-txt">
                                    올바른 생년월일을 입력해주세요.
                                  </p>
                                )
                              )}
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
  .wrong-txt {
    color: orange;
    font-size: 12px;
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

  input {
    border-radius: 4px;
    border: 1px solid #ccc;

    &.typing {
      font-size: 14px;
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
  tr.validate-tr {
    height: unset;
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
    margin-top: 15px;
    cursor: pointer;
  }
  .address-hint {
    margin-top: 2px;
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
