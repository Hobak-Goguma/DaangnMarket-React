import React, { useState,useCallback } from "react";
import MyLayout from "./MypageLayout";
import MyPage2ndLogin from "./MyPage2ndLogin";
import MyInfoChng from "./MyInfoChng";

const MyChange = ({location,history}) =>{
    console.log(history);
    let choose = "내 정보 수정";
    const ID = "root"
    const [login,setLogin] = useState({
        pw:"",
        login:false
    });
    // const changeLogin = useCallback( (pw,TF) =>{
    //     setLogin({pw:pw,login:TF});    
    // },[login]);

    // function loginFetch() {       
    //     fetch("http://16535b06.ngrok.io/member/login/", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             user_id: ID,
    //             user_pw: login.pw,
    //         }),
    //     }).then((response) => {
    //         console.log(response);
    //         if (response.status === 200) {
    //             alert("정상 로그인 되었습니다");
    //             console.log(response);
    //         } else {
    //             alert("아이디와 비밀번호를 확인해 보세요.");
    //             changeLogin("",false);
    //         }
    //     });
    // }
    // if(login.login){
    //     loginFetch();
    // }
    // if(!ID){
    //     alert("로그인이 필요합니다.");
    //     history.push("/login");
    // }
    
    return(<MyLayout choose={choose} history={history}>
        <MyInfoChng ID={ID}/>
        {/* {login.login? <MyInfoChng ID={ID}/>:<MyPage2ndLogin ID={ID} changeLogin={changeLogin}/> } */}
    </MyLayout>);
}

export default MyChange;