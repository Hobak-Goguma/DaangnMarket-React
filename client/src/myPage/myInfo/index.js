import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MyLayout from "../MypageLayout";
import { Link } from "react-router-dom";

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
        birth:"",
        email:"",
        gender: "",
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
                
                fetch(`www.daangn.site/memeber/${sessionInfo.pk}`,{//수정용 api주소 수정용 fetch
                    method:"GET",
                    headers:{
                        "Content-type": "application/json",
                    },
                    body:JSON.stringify({
                            nick_name: sessionInfo.nick_name,
                            tel: sessionInfo.tel,
                            // birth: birthFetch,
                            email: sessionInfo.email,
                            addr: sessionInfo.add,
                    })
                }).then((response)=>{
                    if(response.status===200){                                
                        alert("비밀번호 수정이 완료되었습니다.");
                        history.push("/");
                    }else{
                        alert("비밀번호 수정이 되지 않았습니다. 다시한번 시도해주세요.");
                    }
                });
                setSessionInfo({
                    ...sessionInfo,
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
                gender: "MALE",
                birth:"19200101",
                email: "sunwoo@wonsang.ggum",
                nick_name: "루트",
                tel: "010-1234-1234",
                add: ["서울특별시 영등포구 짜장동"]
            });
        }
    },[])
    let birthYear="",birthMonth="",birthDay="";
    for(let i = 0 ; i < sessionInfo.birth.length; i++){
        if(i<4){
            birthYear+=sessionInfo.birth[i];
        }else if(i < 6){
            birthMonth+=sessionInfo.birth[i];
        }else{
            birthDay+=sessionInfo.birth[i];
        }
    }
    return (<MyLayout history={history} choose="내 정보 보기">
        
        <Info>
        
            <div className="title">
                <span className="tit">{
                    state==="info"? "내정보":
                    state==="nickname"? "별명 변경":
                    state==="phone"? "전화번호 변경":
                    state==="addr"? "주소 변경":
                    setState("info")
                }</span>
            </div>
            <div className="infoBox">
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
                <Link to={{
                    pathname : `/myinfoChange`,
                    state : {
                        state : "nick_name",
                        user : sessionInfo}
                }}>
                    <div className="nickName info changeAble">
                        <a href="">닉네임</a> <span>{sessionInfo.nick_name}</span>
                        <div className="change">변경하기 <i className="fas fa-chevron-right"></i></div>
                    </div>
                </Link>
            
                <Link to={{
                    pathname : `/myinfoChange`,
                    state : {
                        state : "tel",
                        user : sessionInfo}
                }}>
                <div className="phone info changeAble">
                    <a href="">전화번호</a> <span>{sessionInfo.tel}</span>
                    <div className="change">변경하기 <i className="fas fa-chevron-right"></i></div>
                </div>
                </Link>
                <Link to={{
                    pathname : `/myinfoChange`,
                    state : {
                        state : "addr",
                        user : sessionInfo}
                }}>
                <div className="addr info changeAble">
                    <a href="">주소</a> <span>{sessionInfo.add[0]}</span>
                    {sessionInfo.add[1]&&sessionInfo.add[1]!==""?
                    <><a href=""></a> <span>{sessionInfo.add[1]}</span></>:
                    <></>}
                    <div className="change">변경하기 <i className="fas fa-chevron-right"></i></div>

                </div>
                </Link>
                <Link to={{
                    pathname : `/myinfoChange`,
                    state : {
                        state : "gender",
                        user : sessionInfo}
                }}>
                <div className="addr info changeAble">
                    <a href="">성별</a>
                    {sessionInfo.gender&&sessionInfo.gender!==""?
                     <span>{sessionInfo.gender==="MALE"? "남성":"여성"}</span>:
                    <></>}
                    <div className="change">변경하기 <i className="fas fa-chevron-right"></i></div>

                </div>
                </Link>
                <Link to={{
                    pathname : `/myinfoChange`,
                    state : {
                        state : "birth",
                        user : sessionInfo}
                }}>
                <div className="addr info changeAble">
                    <a href="">생년월일</a>
                    {sessionInfo.gender&&sessionInfo.gender!==""?
                     <span>{birthYear}년 {birthMonth}월 {birthDay}일</span>:
                    <></>}
                    <div className="change">변경하기 <i className="fas fa-chevron-right"></i></div>

                </div>
                </Link>
        </>
        
        </div>
        </Info>
    </MyLayout>);
}

export default MyInfo;