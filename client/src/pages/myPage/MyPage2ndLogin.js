import React,{useEffect} from "react";
import styled from "styled-components";


const Login = styled.div`
width:calc(100% - 250px);
margin-left:250px;
margin-top: 200px;
height: 500px;
border-top: 3px solid #ff8a3d;
text-align:center;
h1{
    margin-top:70px;
    font-size:22px;
}
>p{
    font-size:13px;
    margin-top:10px;
}
>div{
    margin-top:40px;
    width:calc(100% - 70px);
    height:130px;
    padding:35px;
    border:1px solid rgb(200,200,200);
    .id{
        margin-top:5px;
        font-size:17px;
        font-weight:bold;
        color:#ff8a3d;
    }
    .pw{
        margin-top:20px;
    }
    input{
        margin-top:8px;
        font-size:13px;
        padding:7px;
        width:100px;
    }
}
button{
    cursor:pointer;
    margin-top:20px;
    width:200px;
    height:50px;
    border:0;
    background:#ffbe93;
    border-radius:4px;
    color:#fff;
    font-size:17px;
    font-weight:bold;
}
`;

const MyPage2ndLogin = ({ID,changeLogin}) =>{
    let checkPw ="";
    const change = (e)=>{
        checkPw=e.target.value;
    }
    const click = (e)=>{
        if(e.type==="click" || (e.type==="keydown" && e.key === "Enter")){
            changeLogin(checkPw,true);
        }
    }
return(
    <Login>
        <h1>비밀번호 재확인</h1>
        <p>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.</p>
        <div>
            <p>아이디</p>
            <p className="id">{ID}</p> 
            <p className="pw">비밀번호</p>
            <input type="password" id="pw" onChange={change} onKeyDown = {click}/>
        </div>
        <button onClick={click}>확인</button>

    </Login>);
}

export default MyPage2ndLogin;