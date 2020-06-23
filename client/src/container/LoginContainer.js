import React, { useState } from "react";
import Login from "../components/login/Login";
import { withRouter } from "react-router-dom";
import api from "../common/api";

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
    api
      .post("/member/login", { user_id: ID, user_pw: PW })
      .then(async (res) => {
        if (res.status === 200) {
          alert("정상 로그인 되었습니다");
          const  user = await res.data;
          sessionStorage.setItem("user", JSON.stringify(user));
          history.push("/");
          const storage = JSON.parse(sessionStorage.getItem("user"));
          console.log(storage.name);
        } else {
          alert("응 틀렸어~");
        }
      })
      .catch();
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
