import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MyLayout from "./MypageLayout";

const Info = styled.div`
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
    .infoBox{
        position: relative;
        box-sizing:border-box; 
        margin: 50px 0 100px 0;
        border:1px solid #ccc;
        border-radius:10px;
        width:100%;
        padding:200px 30px 30px 30px ;
        .infoChange{
            width:calc(100% - 60px);
            position:absolute;
            top:40px;
            left:30px;
            font-size:25px;
            a{
                display:inline-block;
                width:150px;
            }
            .modify{
                cursor:pointer;
                position:absolute;
                right:0;
                top:50%;
                transform:translateY(-50%);
            }
        }
        .btnFinish{
            
            width:100%;
            text-align:center;
        }
        
        .profile{
            background:url("/img/noname.jpg") no-repeat center;
            background-size: cover;
            position:absolute;
            top:25px;
            right:60px;
            width:130px;
            height:130px;
            border:1px solid #ccc;
            border-radius:50%;
        }
        .necessary{
            width: calc(100% - 60px);
            position:absolute;
            top:30px;
            left:30px;
            a{
                width: 100px;
                display: inline-block;
                cursor: auto;
            }
            .name{
                margin-top:10px;
                font-size:23px
            }
            .id{
                margin-top:20px;
                font-size:23px
            }
            .temperature{
                margin-top :35px;
                .temper{
                    margin-top :13px;
                    height:3px;
                    width:calc(100% - 210px);
                    border-radius:3px;
                    border:1.1px solid #ccc;
                    overflow:hidden;
                    .manner{
                        height:100%;
                        background:blue;
                    }
                }
            }
        }
        .changeAble{
            cursor:pointer;
            &:hover{
                background:#eee;
            }
            .change{
                display:inline-block;
                position:absolute;
                right:50px;
                top:50%;
                transform:translateY(-50%);
                color: black;
                font-size:13px;
            }
        }
        .info{
            border-bottom:1px solid #ccc;
            padding:5px;
            height:50px;
            line-height:50px;
            position:relative;
            background:#fff;
            a{
                width: 100px;
                display: inline-block;
            }
            span{
                font-size:21px;
                display: inline-block;
            }
        }
    }
`;

const MyInfo = ({history}) =>{
    let tempInfo;
    const [sessionInfo,setSessionInfo] = useState({
        pk: 0,
        user_id: "",
        name: "",
        nick_name:"",
        tel: "",
        add: [],
        temper: 36.5,
    });
    const [state, setState] = useState("info");

    useEffect(()=>{// 세션정보 이니셜라이징
        //통신시 첫 분기문만 없애면 됨
        if(window.sessionStorage.getItem("user")!==null&&window.sessionStorage.getItem("user")!==""){
            if(window.sessionStorage.getItem("user")===null&&window.sessionStorage.getItem("user")===""){
                alert("로그인이 필요한 서비스입니다.");
                history.push("/login");
            }else{
                tempInfo = JSON.parse(window.sessionStorage.getItem("user"));
                setSessionInfo({
                    pk: 1,
                    user_id: tempInfo.user_id,
                    name: tempInfo.name,
                    nick_name: tempInfo.nick_name,
                    tel: tempInfo.tel,
                    add: [].concat(tempInfo.add)
                });
            }
        }else{
            setSessionInfo({
                ...sessionInfo
                ,pk: 1,
                user_id: "root",
                name: "root",
                nick_name: "루트",
                tel: "010-1234-1234",
                add: ["서울특별시 영등포구 짜장동"]
            });
        }
    },[])
    const click = (e)=>{
        const targetId = e.target.id;
        switch (targetId) {
            case "nickname":
                setState("nickname")
                break;
            case "phone":
                setState("phone")
                break;
            case "addr":
                setState("addr")
                break;
            default:
                setState("info")
                break;
        }
    }


    return (<MyLayout history={history} choose="내 정보 보기">
        
        <Info>
        
            <div className="title">
                <span className="tit">{state==="info"? "내정보":
                state==="nickname"? "별명 변경":
                state==="phone"? "전화번호 변경":
                state==="addr"? "주소 변경":setState("info")
                }</span>
            </div>
            <div className="infoBox">
                {state==="info"? 
                <>
                <div className="profile"></div> 
                <div className="necessary">
                    <div className="name">
                        <a href="">이름</a> <span>{sessionInfo.name}</span>
                    </div>
                    <div className="id">
                        <a href="">아이디</a> <span>{sessionInfo.user_id}</span>
                    </div>
                    <div className="temperature">
                        <a href="">매너온도</a>{sessionInfo.temper}도
                        <div className="temper"><div className="manner" style={{width:`  ${sessionInfo.temper}%  `}}></div></div>
                    </div>
                </div>
                <div className="nickName info changeAble" id="nickname" onClick={click}>
                    <a href="">닉네임</a> <span>{sessionInfo.nick_name}</span>
                    <div className="change">변경하기 <i className="fas fa-chevron-right"></i></div>
                </div>
                <div className="phone info changeAble" id="phone"  onClick={click}>
                    <a href="">전화번호</a> <span>{sessionInfo.tel}</span>
                    <div className="change">변경하기 <i className="fas fa-chevron-right"></i></div>
                </div>
                <div className="addr info changeAble" id="addr" onClick={click}>
                    <a href="">주소</a> <span>{sessionInfo.add[0]}</span>
                    {sessionInfo.add[1]&&sessionInfo.add[1]!==""?
                    <><a href=""></a> <span>{sessionInfo.add[1]}</span></>:
                    <></>}
                    <div className="change">변경하기 <i className="fas fa-chevron-right"></i></div>

                </div>
        </>:
        state==="nickname"?<>
            <div className="infoChange">
                <a href="">닉네임</a> {sessionInfo.nick_name} <div className="modify"><i className="fas fa-pen"></i></div>
            </div>
            <div className="btnFinish"><button>변경 완료</button></div>
        </>:
        state==="phone"?<></>:
        state==="addr"?<></>:
        setState("info")}
        
        </div>
        </Info>
    </MyLayout>);
}

export default MyInfo;