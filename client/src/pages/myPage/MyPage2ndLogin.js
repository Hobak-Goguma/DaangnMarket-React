import React,{useEffect} from "react";
import styled from "styled-components";
import MyLayout from "./MypageLayout";


const MyPage2ndLogin = ({localID}) =>{
   

    const Login = styled.div`
        width:calc(100% - 250px);
        margin-left:250px;
        margin-top: 200px;
        height: 500px;
        border-top: 3px solid #ff8a3d;
    `;
return(<MyLayout>
    <Login>
        <h1>비밀번호 재확인</h1>
        <p>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.</p>
        <div>
            <p>아이디  : {localID}</p> 
            <p>비밀번호</p>
            <input type="password"/>
        </div>
        <button>확인</button>

    </Login>
</MyLayout>);
}

export default MyPage2ndLogin;