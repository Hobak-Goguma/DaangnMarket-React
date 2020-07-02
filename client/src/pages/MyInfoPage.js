import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Layout from "../common/components/Layout";
import MyNav from "../components/mypage/MyPageNav";
import {Link} from "react-router-dom";
import Modyfy from "../components/myinfochange/Modify";

const Info = styled.div`
    width:calc(100% - 170px);
    margin-left:170px;
    margin-top: 70px;
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
        margin: 30px 0;
        border:1px solid #ccc;
        border-radius:10px;
        width:100%;
        padding: 30px ;
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
            top:30px;
            right:35px;
            width:130px;
            height:130px;
            border:1px solid #ccc;
            border-radius:50%;
        }
        .necessary{
        		padding-bottom: 30px;
            dt{
                width: 100px;
                padding-left: 5px;
                display: inline-block;
                font-size: 14px;
                cursor: auto;
            }
            dd{
            		display: inline-block;
                font-size:18px
            }
            .name dd{
                margin: 10px 0 30px;
            }
            .temperature{
                margin-top :35px;
                .temper{
                    width:calc(100% - 280px);
                    height:6px;
                    display: block;
                    padding: 1px;
                    margin-top :13px;
                    margin-left: 100px;
                    position: relative;
                    border: 1px solid #dddddd;
                    border-radius: 4px;
                    &:before {
                    	content: ' ';
                    	position: absolute;
                    	width: 12px;
                    	height: 12px;
                    	top: -2px;
                    	left: 0;
                    	border-radius: 100%;
                    	background:#0073e0;
                    }
                    .manner{
                        height:100%;
                        background:#0073e0;
                    }
                }
            }
        }
        .changeAble{
            cursor:pointer;
            &:hover{
                background: #ffe8db;
            }
            .change{
                display:inline-block;
                position:absolute;
                right:20px;
                top:50%;
                transform:translateY(-50%);
                color: black;
                font-size:13px;
                i {
                	margin-left: 4px;
                }
            }
        }
        .info{
            border-bottom:1px solid #ccc;
            padding: 5px;
            height:50px;
            line-height:50px;
            position:relative;
            background:#fff;
            dt{
                width: 100px;
                display: inline-block;
                font-size:14px;
            }
            dd{
                display: inline-block;
                font-size:18px;
            }
            &:last-child {
            border-bottom: none;
            }
        }
    }
    .withdrawBox {
    	width: 100%;
    	box-sizing: border-box;
    	padding-bottom: 70px;
    	text-align: center;
    	cursor: pointer;
    	span {
    		color: #555555;
    		font-size: 14px;
    	}
    }
`;

const MyInfo = ({history}) => {
	// let tempInfo;
	const [sessionInfo, setSessionInfo] = useState({
		pk: 0,
		user_id: "",
		name: "",
		nick_name: "",
		birth: "",
		email: "",
		gender: "",
		tel: "",
		add: [],
		temper: 36.5,
	});
	const [modifyon] = useState(false);
	const [state, setState] = useState("info");

	useEffect(() => {// 세션정보 이니셜라이징
		//통신시 첫 분기문만 없애면 됨
		if (window.sessionStorage.getItem("user") !== null
			&& window.sessionStorage.getItem("user") !== "") {
			if (window.sessionStorage.getItem("user") === null
				&& window.sessionStorage.getItem("user") === "") {
				alert("로그인이 필요한 서비스입니다.");
				history.push("/login");
			} else {
				// tempInfo = JSON.parse(window.sessionStorage.getItem("user"));

				// fetch(`www.daangn.site/memeber/${sessionInfo.pk}`,{//수정용 api주소 수정용 fetch
				//     method:"GET",
				//     headers:{
				//         "Content-type": "application/json",
				//     },
				//     body:JSON.stringify({
				//             nick_name: sessionInfo.nick_name,
				//             tel: sessionInfo.tel,
				//             // birth: birthFetch,
				//             email: sessionInfo.email,
				//             addr: sessionInfo.add,
				//     })
				// }).then((response)=>{
				//     if(response.status===200){
				//         alert("비밀번호 수정이 완료되었습니다.");
				//         history.push("/");
				//     }else{
				//         alert("비밀번호 수정이 되지 않았습니다. 다시한번 시도해주세요.");
				//     }
				// });
				// setSessionInfo({
				//     ...sessionInfo,
				//     pk: 1,
				//     user_id: tempInfo.user_id,
				//     name: tempInfo.name,
				//     nick_name: tempInfo.nick_name,
				//     tel: tempInfo.tel,
				//     add: [].concat(tempInfo.add)
				// });
			}
		} else {
			setSessionInfo({
				...sessionInfo
				, pk: 1,
				user_id: "root",
				name: "썰영화니",
				gender: "MALE",
				birth: "19200101",
				email: "sunwoo@wonsang.ggum",
				nick_name: "루트",
				tel: "010-1234-1234",
				add: ["서울특별시 영등포구 짜장동"]
			});
		}
	}, [])
	let birthYear = "", birthMonth = "", birthDay = "";
	for (let i = 0; i < sessionInfo.birth.length; i++) {
		if (i < 4) {
			birthYear += sessionInfo.birth[i];
		} else if (i < 6) {
			birthMonth += sessionInfo.birth[i];
		} else {
			birthDay += sessionInfo.birth[i];
		}
	}
	return (
		<>
			<Layout>
				<div className="container">
					<MyNav choose="내 정보" history={history}/>
					<Info>
						<div className="title">
              <span className="tit">{
	              state === "info" ? "내 정보" :
		              state === "nickname" ? "별명 변경" :
			              state === "phone" ? "전화번호 변경" :
				              state === "addr" ? "주소 변경" :
					              setState("info")
              }</span>
						</div>
						<div className="infoBox">
							<div className="profile"/>
							<div className="necessary">
								<dl className="name">
									<dt>이름</dt>
									<dd>{sessionInfo.name}</dd>
								</dl>
								<dl className="id">
									<dt>아이디</dt>
									<dd>{sessionInfo.user_id}</dd>
								</dl>
								<dl className="temperature">
									<dt>매너온도</dt>
									<dd>{sessionInfo.temper}도</dd>
									<dd className="temper">
										<div className="manner"
										     style={{width: `${sessionInfo.temper}% `}}/>
									</dd>
								</dl>
							</div>
							<dl className="nickName info changeAble">
								<Link to={{
									pathname: `/myinfoChange`,
									state: {
										state: "nick_name",
										user: sessionInfo
									}
								}}>
									<dt>닉네임</dt>
									<dd>{sessionInfo.nick_name}</dd>
									<dd className="change">
										변경하기
										<i className="fas fa-chevron-right"/>
									</dd>
								</Link>
							</dl>
							<dl className="phone info changeAble">
								<Link to={{
									pathname: `/myinfoChange`,
									state: {
										state: "tel",
										user: sessionInfo
									}
								}}>
									<dt>전화번호</dt>
									<dd>{sessionInfo.tel}</dd>
									<dd className="change">
										변경하기
										<i className="fas fa-chevron-right"/>
									</dd>
								</Link>
							</dl>
							<dl className="addr info changeAble">
								<Link to={{
									pathname: `/myi\nfoChange`,
									state: {
										state: "addr",
										user: sessionInfo
									}
								}}>
									<dt>주소</dt>
									<dd>{sessionInfo.add[0]}</dd>
									{sessionInfo.add[1] && sessionInfo.add[1] !== "" ?
										<dd>{sessionInfo.add[1]}</dd> :
										<></>}
									<dd className="change">
										변경하기
										<i className="fas fa-chevron-right"/>
									</dd>
								</Link>
							</dl>
							<dl className="addr info changeAble">
								<Link to={{
									pathname: `/myinfoChange`,
									state: {
										state: "gender",
										user: sessionInfo
									}
								}}>
									<dt>성별</dt>
									{sessionInfo.gender && sessionInfo.gender !== "" ?
										<dd>{sessionInfo.gender === "MALE" ? "남성" : "여성"}</dd>
										:
										<></>}
									<dd className="change">
										변경하기
										<i className="fas fa-chevron-right"/>
									</dd>
								</Link>
							</dl>
							<dl className="addr info changeAble">
								<Link to={{
									pathname: `/myinfoChange`,
									state: {
										state: "birth",
										user: sessionInfo
									}
								}}>
									<dt>생년월일</dt>
									{sessionInfo.gender && sessionInfo.gender !== "" ?
										<dd>{birthYear}년 {birthMonth}월 {birthDay}일</dd> :
										<></>}
									<dd className="change">
										변경하기
										<i className="fas fa-chevron-right"/>
									</dd>
								</Link>
							</dl>
						</div>
						<div className="withdrawBox">
							<span>당근마켓 탈퇴하기 😢</span>
						</div>
					</Info>
				</div>
			</Layout>
			{modifyon ? <Modyfy/> : <></>}
		</>);
}

export default MyInfo;
