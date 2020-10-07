import React from "react";
import styled from "styled-components";
import api from "../../../common/api";
import Radio from "@material-ui/core/Radio";
import { useEffect } from "react";

const UserfromDiv = styled.div`

  .normal-button {
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
    background: #ff8a3d;
  }
  input {
    border-radius: 4px;
    border: 1px solid #ccc;

    &.typing {
      font-size: 14px;
      width: 300px;
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

  background: #fff;
  .ghost-tr{
    height:20px;
  }
  .col1 {
    width: 120px;
    padding-left: 30px;
    font-size: 14px;
    font-weight: bold;
    opacity: 0.8;
  }
  
  td {
    vertical-align: middle;
  }
  .col2-2 {
    display: flex;
    align-items: center;
  }
  tr {
    height: 60px;
  }
  tr.validate-tr {
    height: unset;
  }
  .colbutton {
    margin-left: 10px;
    cursor: pointer;
  }
  .gender.col2 {
    margin-left: -8px;
    display: flex;
    justify-content: space-between;
    width: 160px;
    margin-top: 10px;
  }
`;

 function Userform ({history,setInputState,inputState,setCheck,checkValidation}){
  const regex ={
    regexBirth : /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/,
    regexEmail : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
    regexPw : /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()_+|<>?:{}])[A-Za-z\d~!@#$%^&*()_+|<>?:{}]{8,}$/,
    regexPhone : /^\d{3}\d{3,4}\d{4}$/,
    regexKor : /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
    regexSpec : /[~!@#$%^&*()_+|<>?:{}]/
  }

  useEffect(()=>{
    
    const valiCheck =()=>{
      let check = {
          id : false,
          pw : false,
          samePw: false,
          validation : false,
          gender : false,
          name : false,
      }
      if(inputState.id.length > 5 &&  // id validation check
      /[0-9]/.test(inputState.id) &&
      /[a-zA-Z]/.test(inputState.id)&&
      !regex.regexKor.test(inputState.id)){
        check = {...check,id : true};
      }
      if(regex.regexPw.test(inputState.pw) && // pw validation check
      !regex.regexKor.test(inputState.pw)){
        check = {...check,pw : true};
      }
      if(inputState.pw === inputState.pwConfirm){
        check = {...check,samePw : true};
      }
      if(regex.regexEmail.test(inputState.email) &&
        regex.regexPhone.test(inputState.phone) &&
        regex.regexBirth.test(inputState.birth)){
        check = {...check,validation : true};
      }
      if(inputState.name.length > 1){
        check = {...check,name : true};
      }
      if(inputState.gender !== ""){
        check = {...check,gender : true};
      }
      if(checkValidation.id !== check.id ||
        checkValidation.pw !== check.pw ||
        checkValidation.samePw !== check.samePw ||
        checkValidation.validation !== check.validation ||
        checkValidation.gender !== check.gender ||
        checkValidation.name !== check.name)
      setCheck({
        ...check,
        sameId : checkValidation.sameId
      })
  }
      switch (history.location.pathname) {
        case "/register":
          valiCheck(inputState);
          break;
        case "/modify":
        
          console.log(history.location.pathname);
          break;
        
        default:
          history.goback();
          break;
      }
  },[regex,checkValidation,inputState,setCheck,history])

    
    const fetchIdDuplication = () => {
      api
        .get(`member/overlap?user_id=${inputState.id}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            alert("중복확인이 완료되었습니다.");
          } else {
            alert("중복된 아이디가 있습니다.");
          }
        })
        // console.log 에 status error 안띄우기
        .catch((err) => {
          console.error(err);
          alert("중복된 아이디가 있습니다.");
        });
    };


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
          [e.target.name]: e.target.value.replace(regex.regexSpec, ""),
        });
      }
    };


    return(
        
    <UserfromDiv>
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
                  {checkValidation.id ? (
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
                  {checkValidation.pw ? (
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
                  {checkValidation.samePw &&
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
                  {checkValidation.name? (
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
                  {regex.regexEmail.test(inputState.email) ? (
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
                  {regex.regexPhone.test(inputState.phone) ? (
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
                  {regex.regexBirth.test(inputState.birth) ? (
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
    </UserfromDiv>
  );
}

export default Userform;