import React from "react";
import { StyledRegister } from "./style";

// MUI stuff
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";

const Register = ({
  goHome,
  handleInputState,
  inputState,
  fetchIdDuplication,
  handlePostCode,
  visible,
  handleAllCheck,
  handleCheckbox,
  checkbox,
  fetchRegister,
  regexPhone,
  regexPw,
  regexEmail,
  regexBirth,
  regexKor,
  addrInput,
}) => {
  return (
    <StyledRegister>
      <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
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
                          {/* <div className="normal-button colbutton">
                            이메일 중복확인
                          </div> */}
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
                                <p className="wrong-txt">이메일이 맞습니까?</p>
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
                          {/* <div className="normal-button-gray colbutton">
                            인증번호받기
                          </div> */}
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

                {/* <table>
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
                </table> */}
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
                  <h3 style={{ fontSize: 20, opacity: 0.6 }}>이용약관동의*</h3>
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
  );
};

export default Register;
