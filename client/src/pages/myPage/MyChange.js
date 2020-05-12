import React, { useState,useCallback } from "react";
import MyLayout from "./MypageLayout";
import MyPage2ndLogin from "./MyPage2ndLogin";
import MyInfoChng from "./MyInfoChng";

const MyChange = ({location,history}) =>{
    const [login,setLogin] = useState(false);
    const changeLogin = useCallback( () =>{
        setLogin(!login);    
    },[login]);

    const ID = location.state.localID;
    if(!ID){
        alert("로그인이 필요합니다.");
        history.push("/login");
    }
    
    return(<MyLayout>
        <MyInfoChng ID={ID}/>
        {/* {login? <MyInfoChng/>:<MyPage2ndLogin ID={ID} changeLogin={changeLogin}/> } */}
    </MyLayout>);
}

export default MyChange;