import React, { useState,useCallback, useEffect } from "react";
import MyLayout from "./MypageLayout";
import MyPage2ndLogin from "./MyPage2ndLogin";
import MyInfoChng from "./MyInfoChng";

const MyPwChange = ({history}) =>{
    let choose = "비밀번호 수정";
    const [ID,setID]= useState("");
    useEffect(()=>{
        if(window.sessionStorage.getItem("user")!==null&&window.sessionStorage.getItem("user")!==""){// 통신시 분기문 제거
            if(window.sessionStorage.getItem("user")===null||window.sessionStorage.getItem("user")===""){
                alert("로그인이 필요한 서비스입니다.");
                history.push("/");
            }
            setID (JSON.parse(window.sessionStorage.getItem("user")).user_id);
        }else{
            setID("root");
        }
    },[])
    
    const [login,setLogin] = useState({
        pw:"",
        login:false
    });
    const changeLogin = useCallback( (pw,TF) =>{
        setLogin({pw:pw,login:TF});    
    },[login]);

    
    return(<MyLayout choose={choose} history={history}>
        {login.login? <MyInfoChng history={history} ID={ID} login={login} changeLogin={changeLogin}/>:<MyPage2ndLogin ID={ID} changeLogin={changeLogin}/> }
    </MyLayout>);
}

export default MyPwChange;