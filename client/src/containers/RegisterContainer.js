import React, { useState, useRef } from "react";
import { API } from "../lib/api";
import { withRouter } from "react-router-dom";
import Register from "../components/Register";

const regexBirth = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
const regexEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
const regexPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()_+|<>?:{}])[A-Za-z\d~!@#$%^&*()_+|<>?:{}]{8,}$/;
const regexSpec = /[~!@#$%^&*()_+|<>?:{}]/;
const regexPhone = /^\d{3}\d{3,4}\d{4}$/;
const regexKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

const RegisterContainer = ({ history }) => {
  const [visible, setVisible] = useState(false);
  const [isIdDuplicate, setIdDuplicate] = useState(false);
  const addrInput = useRef("");

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
    fetch(`${API}member/overlap?user_id=${inputState.id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("중복확인이 완료되었습니다.");
          setIdDuplicate(true);
        } else {
          alert("중복된 아이디가 있습니다.");
          setIdDuplicate(false);
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

  const goHome = () => {
    history.push("/");
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
      isIdDuplicate &&
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
      fetch(`${API}member`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputState.name,
          nick_name: inputState.name,
          user_id: inputState.id,
          user_pw: inputState.pw,
          tel: inputState.phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
          birth: inputState.birth.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"),
          email: inputState.email,
          gender: inputState.gender,
          add: addrInput.current.value,
        }),
      }).then((response) => {
        if (response.status === 200 || response.status === 201) {
          alert("회원가입 되었습니다.");
          history.push("/login");
        } else {
          alert("안된다 ㅜㅜ");
          if (!isIdDuplicate) {
            alert("아이디 중복확인 하였는지 확인해주세요!");
          }
        }
      });
    } else {
      alert("양식에 맞게 작성하였는지 다시한번 확인해 주세요");
    }
  };
  return (
    <Register
      addrInput={addrInput}
      goHome={goHome}
      handleInputState={handleInputState}
      inputState={inputState}
      fetchIdDuplication={fetchIdDuplication}
      handlePostCode={handlePostCode}
      visible={visible}
      handleAllCheck={handleAllCheck}
      handleCheckbox={handleCheckbox}
      checkbox={checkbox}
      fetchRegister={fetchRegister}
      regexPhone={regexPhone}
      regexPw={regexPw}
      regexEmail={regexEmail}
      regexBirth={regexBirth}
      regexKor={regexKor}
    ></Register>
  );
};

export default withRouter(RegisterContainer);
