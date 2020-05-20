import React, { useState } from "react";
import Login from "../components/Login";
import { withRouter } from "react-router-dom";
import { API } from "../lib/api";

const LoginContainer = ({ history }) => {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  const handleID = (e) => {
    setID(e.target.value);
  };

  const handlePW = (e) => {
    setPW(e.target.value);
  };

  const loginFetch = () => {
    window.sessionStorage.setItem("id", ID);
    // history.push("/");
    fetch(`${API}/member/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user_id: ID,
        user_pw: PW,
      }),
    }).then(async (response) => {
      if (response.status === 200) {
        alert("정상 로그인 되었습니다");
        const user = await response.json();
        window.sessionStorage.setItem("user", JSON.stringify(user));
        history.push("/");
        const storage = JSON.parse(sessionStorage.getItem("user"));
        console.log(storage.name);
      } else {
        alert("응, 틀렸어~");
      }
    });

    // .then((response) => {
    //   console.log(response);
    // });
  };
  const goRegister = () => {
    history.push("/register");
  };
  return (
    <Login
      onChangeID={handleID}
      onChangePW={handlePW}
      loginFetch={loginFetch}
      goRegister={goRegister}
    />
  );
};

export default withRouter(LoginContainer);
