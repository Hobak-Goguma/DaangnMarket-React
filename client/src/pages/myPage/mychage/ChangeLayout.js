import React from "react";
import styled from 'styled-components';
import MyLayout from "../MypageLayout"

const ChangeLayout = styled.div`
    width:calc(100% - 250px);
    margin-left:250px;
    margin-top: 200px;
    .title{
        position:relative;
        border-bottom : 3px solid #ff8a3d;
        padding-bottom: 15px;
        span.tit{
            display:inline;
            font-size:26px;
            margin-right:15px;
        }
    }
`;

const Changelayout = ({location,history}) =>{
    const choose = "내 정보 보기";
    let {state:temp} = location;
    const {state, user} = temp;
    let classname,changeValue;
    if(state === "nick_name"){
        classname = "닉네임";
        changeValue = user.nick_name;
    }else if(state === "tel"){
        classname = "전화번호";
        changeValue = user.tel;
    }else{
        classname = "주소"
        changeValue = user.addr;
    }
    

    return (
    <MyLayout history ={history} choose={choose}>
        <ChangeLayout>
        <div className="title">
            <span className="tit">{classname} 변경</span>
        </div>
        <div className="infoChange">
            <a href="">{classname}</a> <div className="modify"><i className="fas fa-pen"></i></div>
        </div>
        <div className="btnFinish"><button>변경 완료</button></div>
            

        </ChangeLayout>
    </MyLayout>);
}

export default Changelayout;