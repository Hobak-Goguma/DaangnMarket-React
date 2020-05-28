import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {API} from "../../lib/api"


// import { Radio } from "@material-ui/core";

const InfoBox = styled.div`
  width: calc(100% - 250px);
  margin-left: 250px;
  margin-top: 200px;
  .blank {
    height: calc(100vh - 200px);
  }
  .title {
    position: relative;
    border-bottom: 3px solid #ff8a3d;
    padding-bottom: 15px;
    span.tit {
      display: inline;
      font-size: 26px;
      margin-right: 15px;
    }
    .necessary {
      display: block;
      position: absolute;
      bottom: 15px;
      right: 0;
      font-size: 13px;
    }
    .description {
      display: inline-block;
      font-size: 13px;
    }
  }
  .InfoBasic,
  .InfoMore {
    margin-left: 50px;
    margin-top: 40px;
    margin-bottom: 100px;
    > div {
      position: relative;
      height: 45px;
      line-height: 45px;
      input {
        border: 1px solid #ccc;
        display: block;
        padding: 10px 7px;
        position: absolute;
        top: 50%;
        left: 150px;
        transform: translateY(-50%);
        width: 250px;
        border-radius: 5px;
      }
      a {
        display: inline-block;
        position: absolute;
        right: 100px;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        line-height: 38px;
        height: 38px;
        width: 150px;
        border-radius: 5px;
        background: #ff8a3d;
        color: #fff;
        text-decoration: none;
      }
      a.disable {
        background: #fff;
        color: #ccc;
        border: 1px solid #ccc;
      }
    }
    .wrong {
      display: none;
      margin-left: 150px;
      color: rgb(255, 71, 71);
      font-size: 13px;
      height: auto;
      padding: 5px 0;
      line-height: 25px;
      .true {
        color: rgb(51, 136, 125);
      }
    }
    .wrong.visible {
      display: block;
    }
    .gender {
      > div {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 150px;
        padding-left: 40px;
        > span {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
      .male {
        left: 150px;
      }
      .female {
        left: 300px;
      }
    }
    .readonly {
      color: #ccc;
    }
    .birth {
      > div {
        width: 266px;
        position: absolute;
        height: 100%;
        top: 50%;
        left: 150px;
        transform: translateY(-50%);
        border: 1px solid #ccc;
        text-align: center;
        span {
          vertical-align: top;
        }
        .box {
          display: inline-block;
          width: calc(210px / 3);
          height: 100%;
          vertical-align: middle;
          margin-left: 10px;
          &:first-child {
            margin-left: 0px;
          }
          position: relative;
          input {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            width: calc(100% - 14px);
            display: inline-block;
            box-sizing: border-box;
            border: 0;
            text-align: center;
          }
        }
      }
    }
    .agree {
      > div {
        position: absolute;
        top: 0;
        left: 150px;
        padding-left: 20px;
        input {
          left: 0;
          width: auto;
        }
        .choice {
          font-weight: normal;
          color: #888;
        }
        .view {
          font-size: 13px;
          font-weight: normal;
          color: #ff8a3d;
        }
      }
    }
  }

  .agreeUse {
    margin: 20px 0 70px 20px;
    .agreeAll {
      .choice {
        font-weight: normal;
        color: #888;
      }
    }
    .agreeChoice {
      margin: 10px 0 0 50px;
      > div {
        display: inline-block;
        margin-right: 120px;
        input {
          margin-right: 10px;
        }
      }
    }
  }
  .btnBox {
    text-align: center;
    margin-bottom: 100px;
    a {
      text-decoration: none;
      color: #ff8a3d;
      font-size: 12px;
      line-height: 50px;
      font-weight: bold;
      text-align: center;
      width: 220px;
      height: 50px;
      border: 1px solid #ff8a3d;
      display: inline-block;
      margin-left: 20px;
      border-radius: 5px;
      background: #fff;
      &:first-child {
        margin-left: 0;
      }
    }
    a.submit {
      background: #ff8a3d;
      color: #fff;
    }
  }
`;

const MyInfoChng = ({ ID, login, changeLogin, history }) => {
  let resUser;
  const [user, setUser] = useState({
    nick_name: "",
    name: "",
    tel: "",
    gender: "",
    email: "",
    newPw: "",
    login: false,
  });

const MyInfoChng = ({ID,login,changeLogin,history}) =>{
    let resUser;
    const [user,setUser] = useState({
        pk:0,
        nick_name : "",
        name :"",
        tel:"",
        gender:"",
        email:"",
        newPw:"",
        login: false
    })

    const pw = login.pw;
    const [nowPwCh,setNowPwCh]=useState("wrong"); // 비밀번호 중복체크를 위한 변수
    const [newPwCh,setNewPwCh]=useState({  //비밀번호 유효성 체크를 위한 변수
        newPwVal:"",
        newPwClass:"wrong",
        newPwChClass: "wrong",
        differPw: "",
        moreEight:"",
        combinate:"",
        sameNum:"",
    });
    // const [birth,setBirth] = useState({
    //     birthClass:"wrong",
    //     year:"",
    //     month :"",
    //     day: ""
    // });//생일 체크를 위한 변수

    // const [agreeCh,setAgreeCh] = useState({ //약관 체크를 위한 state
    //     SMS:false,
    //     mail:false
    // });

  const change = (e) => {
    const id = e.target.id;
    switch (
      id //기본정보 변경시
    ) {
      case "nowPw": // 현재 비밀번호 입력 확인용
        if (e.target.value === pw && nowPwCh === "wrong visible") {
          setNowPwCh("wrong");
        } else {
          setNowPwCh("wrong visible");
        }
        break;
      case "newPwCh":
        if (newPwCh.newPwVal !== e.target.value) {
          setNewPwCh({ ...newPwCh, newPwChClass: "wrong visible" });
        } else {
          setNewPwCh({ ...newPwCh, newPwChClass: "wrong" });
        }
        break;
      case "newPw": // 새로운 비밀번호 유효성 검사용 클래스로 조정
        let tmpnewPwClass = "wrong visible", // 새로운 비밀번호 변경시 유효성 보여주기
          tmpnewPwVal = e.target.value,
          tmpnewPwChClass = newPwCh.newPwChClass, // 새로운 비밀번호 2차 확인
          tmpdifferPw = newPwCh.differPw,
          tmpmoreEight = newPwCh.moreEight,
          tmpcombinate = newPwCh.combinate, // 숫,영,특 2가지 종류 이상사용 확인
          tmpsameNum = newPwCh.sameNum; //3자리 연속 같은숫자인지 확인
        let combCh = [0, false, false, false]; //0번째 몇개의 조합, 1번째 숫,2번째 영,3번재 특;
        let tmpString = e.target.value.split("");
        if (pw !== e.target.value) {
          // 새비밀번호와 현비밀번호 같은지 확인용 (다르면 true)
          tmpdifferPw = "true";
        } else {
          tmpdifferPw = "";
        }
        if (e.target.value.length > 7) {
          // 8자리 넘어가는지 확인(넘으면 true)
          tmpmoreEight = "true";
        } else {
          tmpmoreEight = "";
        }

    useEffect(() => {
        fetch("",{//http://0c525d07.ngrok.io/member/login
            method:"POST",
            headers:{
                "Content-type": "application/json",
            },
            body:JSON.stringify({
                "user_id":ID,
                "user_pw":login.pw
            })
        }).then(async(response)=>{

            resUser = {
                addr: "인천광역시 남동구 구월동",
                name: "root",
                nick_name: "root",
                pk: 1,
                tel: "010-0000-0000",
                user_id: "root",
            }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>통신시 변경해야될
            // if(response.status===200||response.status===201){
            //     res = await response.json();
            //     const temp = JSON.stringify(res);
            //     window.sessionStorage.setItem("user",temp);
            //     resUser = JSON.parse(window.sessionStorage.getItem("user"));
                setUser({
                    pk:resUser.pk,
                    nick_name : resUser.nick_name,
                    name :resUser.name,
                    tel:resUser.tel,
                    gender:"",
                    email:"",
                    newPw:"",
                    login: true
                })
            // }else{
            //     alert("비밀번호가 맞지 않습니다.");
            //     changeLogin({...login,login:false});
            // }
        })

    },[]);
    
    const change = (e) =>{
        const id = e.target.id;
        switch(id){ //기본정보 변경시 
            case "nowPw": // 현재 비밀번호 입력 확인용
                if(e.target.value ===pw && nowPwCh==="wrong visible"){
                    setNowPwCh("wrong");
                }else{
                    setNowPwCh("wrong visible");
                }
                break;
            case "newPwCh":
                if(newPwCh.newPwVal!==e.target.value){
                    setNewPwCh({...newPwCh,newPwChClass:"wrong visible"});
                }else {
                    setNewPwCh({...newPwCh,newPwChClass:"wrong"});
                }
                break;
            case "newPw": // 새로운 비밀번호 유효성 검사용 클래스로 조정
                
                let tmpnewPwClass= "wrong visible", // 새로운 비밀번호 변경시 유효성 보여주기
                tmpnewPwVal=e.target.value,
                tmpnewPwChClass= newPwCh.newPwChClass, // 새로운 비밀번호 2차 확인
                tmpdifferPw= newPwCh.differPw,  
                tmpmoreEight= newPwCh.moreEight,
                tmpcombinate= newPwCh.combinate, // 숫,영,특 2가지 종류 이상사용 확인
                tmpsameNum= newPwCh.sameNum;  //3자리 연속 같은숫자인지 확인
                let combCh = [0,false,false,false]; //0번째 몇개의 조합, 1번째 숫,2번째 영,3번재 특;
                let tmpString = e.target.value.split("");
                if(pw!==e.target.value){ // 새비밀번호와 현비밀번호 같은지 확인용 (다르면 true)
                    tmpdifferPw="true";
                }else{  
                    tmpdifferPw="";
                }
                if(e.target.value.length>7){ // 8자리 넘어가는지 확인(넘으면 true)
                    tmpmoreEight="true";
                    
                }else{
                    tmpmoreEight="";
                }

                tmpsameNum= "true";
                for(let i = 0 ; i < tmpString.length; i++){
                    if(tmpString[i].charCodeAt([0])>47 && tmpString[i].charCodeAt([0])<58){//숫자
                        if(combCh[1]===false){
                            combCh[1]=true;
                            combCh[0]++;
                        }
                        if(i<tmpString.length-2&&tmpString[i].charCodeAt([0])===tmpString[i+1].charCodeAt([0])&&tmpString[i].charCodeAt([0])===tmpString[i+2].charCodeAt([0])){
                            tmpsameNum="false";
                        }
                    }else if(tmpString[i].charCodeAt([0])>64 && tmpString[i].charCodeAt([0])<91){//대문자
                        if(combCh[2]===false){
                            combCh[2]=true;
                            combCh[0]++;
                        }
                    }else if(tmpString[i].charCodeAt([0])>96 && tmpString[i].charCodeAt([0])<123){//소문자
                        if(combCh[2]===false){
                            combCh[2]=true;
                            combCh[0]++;
                        }
                    }else{
                        if(combCh[3]===false){ //특수문자
                            combCh[3]=true;
                            combCh[0]++;
                        }
                    }
                    if(combCh[0]>2){
                        tmpcombinate="true";
                        break;
                    }else{
                        tmpcombinate="";
                    }
                }
                setNewPwCh({
                    newPwVal:tmpnewPwVal,
                    newPwClass:tmpnewPwClass,
                    newPwChClass: tmpnewPwChClass,
                    differPw: tmpdifferPw,
                    moreEight:tmpmoreEight,
                    combinate:tmpcombinate,
                    sameNum:tmpsameNum,
                });
                break;

                // case "birthYear": 
                // //문자입력을 방지
                //     let CheckString = false;

                //     for(let i = 0 ; i<e.target.value.length; i++){
                //         let temp = e.target.value.charCodeAt([i]) ;
                //         if(temp<48||temp>57){
                //             CheckString = true;
                //             break;
                //         }
                //     }
                    
                //     if(!CheckString){
                //         birthCh("year",e.target.value||e.target.value==="");
                //     }else{
                //         e.target.value = birth.year;
                //     }
                //     break;
                // case "birthMonth":
                // //문자입력을 방지
                //     let CheckmonthString = false;

                //     for(let i = 0 ; i<e.target.value.length; i++){
                //         let temp = e.target.value.charCodeAt([i]) ;
                //         if(temp<48||temp>57){
                //             CheckmonthString = true;
                //             break;
                //         }
                //     }
                    
                //     if(!CheckmonthString||e.target.value===""){
                //         birthCh("month",e.target.value);
                //     }else{
                //         e.target.value = birth.month;
                //     }
                // break;
                // case "birthDay":
                // //문자입력을 방지
                //     let CheckdayString = false;

                //     for(let i = 0 ; i<e.target.value.length; i++){
                //         let temp = e.target.value.charCodeAt([i]) ;
                //         if(temp<48||temp>57){
                //             CheckdayString = true;
                //             break;
                //         }
                //     }
                    
                //     if(!CheckdayString||e.target.value===""){
                //         birthCh("day",e.target.value);
                //     }else{
                //         e.target.value = birth.day;
                //     }
                // break;

        for (let i = 0; i < e.target.value.length; i++) {
          let temp = e.target.value.charCodeAt([i]);
          if (temp < 48 || temp > 57) {
            CheckmonthString = true;
            break;
          }
        }

        if (!CheckmonthString || e.target.value === "") {
          birthCh("month", e.target.value);
        } else {
          e.target.value = birth.month;
        }
        break;
      case "birthDay":
        //문자입력을 방지
        let CheckdayString = false;

                case "submit"://변경 버튼 눌렀을때 함수
                    if( newPwCh.sameNum!=="true"|| newPwCh.differPw!=="true"|| newPwCh.moreEight!=="true"|| newPwCh.combinate!=="true"|| newPwCh.newPwClass!=="wrong"||newPwCh.newPwChClass!== "wrong"){
                        alert("비밀번호에 문제가 있습니다.");
                    }
                    // else if(birth.birthClass!=="wrong"){
                    //     alert("생일 입력이 잘못되었습니다.");
                    // }
                    else{
                        //8자리 만들기 위하여
                        // let birthFetch = birth.year;
                        // if(Number(birth.month)<10){ 
                        //     birthFetch += "0"+birth.month;
                        // }else{
                        //     birthFetch += birth.month;
                        // }
                        // if(Number(birth.day)<10){
                        //     birthFetch += "0"+birth.day;
                        // }else{
                        //     birthFetch +=birth.day;
                        // }

        if (!CheckdayString || e.target.value === "") {
          birthCh("day", e.target.value);
        } else {
          e.target.value = birth.day;
        }
        break;

                        fetch(`${API}memeber/${user.pk}`,{//수정용 api주소 수정용 fetch
                            method:"PUT",
                            headers:{
                                "Content-type": "application/json",
                            },
                            body:JSON.stringify({
                                    nick_name: user.nick_name,
                                    user_pw: newPwCh.newPwVal,
                                    tel: user.tel,
                                    // birth: birthFetch,
                                    email: user.email,
                                    addr: user.add,
                            })
                        }).then((response)=>{
                            if(response.status===200){                                
                                alert("비밀번호 수정이 완료되었습니다.");
                                history.push("/");
                            }else{
                                alert("비밀번호 수정이 되지 않았습니다. 다시한번 시도해주세요.");
                            }
                        });
                    }

                break;
                case "secession": //탈퇴 버튼
                console.log(`${API}memeber/${user.pk}`,user.pk);
                    if(window.confirm("정말 탈퇴하시겠습니까?")===true){
                        console.log(user.pk);
                        fetch(`${API}memeber/${user.pk}`,{
                            method:"DELETE",
                            headers:{
                                "Content-type": "application/json",
                            }
                        }).then(async(response)=>{
                            console.log(await response);
                            if(await response.status===204){                                
                                alert("해당 계정이 탈퇴되었습니다.");
                                history.push("/");
                            }else{
                                alert("해당 계정이 탈퇴되지 않았습니다. 다시한번 시도해주세요.");
                            }
                        });
                    }
                break;

      default:
        break;
    }
  };

    // const birthCh = (type,value)=>{ // 생일 체크를 위한 함수

    //     let year= type==="year"? value===""? "":Number(value):Number(birth.year); //연도 입력
    //     let month= type==="month"? value===""? "":Number(value):Number(birth.month); // 월 입력
    //     let day= type==="day"? value===""? "":Number(value):Number(birth.day); //일 입력
    //     let dayCheck = true; // [year,month,day]
    //     if(day>0&&day<32&&year>1918&&year<2021&&month>0&&month<13){//연도 달 체크는 여기서
    //         if(month===1||month===3||month===5||month===7||month===8||month===10||month===12){ //윤달 및 달별 일자 체크
    //             if(day>31){
    //                 dayCheck =false;
    //             }
    //         }else if(month===4||month===6||month===9||month===11){
    //             if(day>30){
    //                 dayCheck =false;
    //             }
    //         }else if(year%400 === 0 && month===2){ //윤달 체크
    //             dayCheck = day>29? false:true;
    //         }else if(year%100 === 0 && month===2){
    //             dayCheck = day>28? false:true;
    //         }else if(year%4 === 0 && month===2){
    //             dayCheck = day>29? false:true;
    //         }else if(month===2 && day>28){
    //             dayCheck =false;
    //         }
    //         if(dayCheck){ // 날짜 맞을때
    //             setBirth({
    //                 year:String(year),
    //                 month:String(month),
    //                 day:String(day),
    //                 birthClass:"wrong"});
    //         }else{ //날짜 틀렸을때 입력은 되나 실패 text뜸
    //             setBirth({
    //                 year:String(year),
    //                 month:String(month),
    //                 day:String(day),
    //                 birthClass:"wrong visible"});
    //         }
    //     }else{// 형식에 맞지 않을때
    //         setBirth({
    //             year:String(year),
    //             month:String(month),
    //             day:String(day),
    //             birthClass:"wrong visible"});
    //     }
    // }

  return (
    <InfoBox>
      {!user.login ? (
        <div className="blank"></div>
      ) : (
        <>
          <div className="title">
            <span className="tit">기본정보</span>
            <p className="necessary">*필수입력사항</p>
          </div>
          <div className="InfoBasic">
            <div>
              아이디*{" "}
              <input type="text" className="readonly" value={ID} readOnly />
            </div>
            <div className="mt15">
              현재 비밀번호{" "}
              <input type="password" id="nowPw" onChange={change} />
            </div>
            <div className={nowPwCh}>현재 비밀번호를 확인해주세요</div>
            <div>새 비밀번호 
                <input id="newPw" onChange={change} type="password"/>
            </div>
            <div className={newPwCh.newPwClass}>
              <p className={newPwCh.differPw}>현재 비밀번호와 다르게 입력</p>
              <p className={newPwCh.moreEight}>8자 이상 입력</p>
              <p className={newPwCh.combinate}>
                영문/숫자/특수문자(공백 제외)만 허용하며, 3개 이상조합
              </p>
              <p className={newPwCh.sameNum}>
                동일한 숫자 3개 이상 연속 사용 불가
              </p>
            </div>
            <div>
              새 비밀번호 확인
              <input type="text" id="newPwCh" onChange={change} />
            </div>
            <div className={newPwCh.newPwChClass}>
              동일한 비밀번호를 입력해주세요
            </div>
            <div>새 비밀번호 확인
                <input type="password" id="newPwCh" onChange={change}/>
            </div>
            <div className={newPwCh.newPwChClass}>동일한 비밀번호를 입력해주세요</div>
        </div>
            {/* <div className="mt15">이름*<input type="text" value={user.name} readOnly/></div>
            <div className="mt15">이메일*<input type="text"/><a href="">이메일 중복확인</a></div>
            <div className="mt15">휴대폰*
                <input type="text" id="phoneNum" value={user.tel} onChange={change}/>
                <input type="hidden" value={user.tel}/><a href="">다른 번호 인증</a></div>
            <div><input type="text" readOnly/><a href="" className="disable">인증 번호 확인</a></div>
        </div>
        <div className="title">
            <span className="tit">추가정보</span>
          </div>
          <div className="InfoMore">
            <div className="gender">
              성별
              <div
                className="male"
                onClick={() => {
                  setUser({ ...user, gender: "MALE" });
                }}
                id="genderMale"
              >
                <Radio
                  type="checkbox"
                  name="gender"
                  checked={user.gender === "MALE"}
                  value="MALE"
                />
                남자
              </div>
              <div
                className="female"
                onClick={() => {
                  setUser({ ...user, gender: "FEMALE" });
                }}
                id="genderFemale"
              >
                <Radio
                  type="checkbox"
                  checked={user.gender === "FEMALE"}
                  name="gender"
                  value="FEMALE"
                />
                여자
              </div>
            </div>
            <div className="mt15 birth">
              생년월일*
              <div>
                <div className="box">
                  <input
                    type="text"
                    maxLength="4"
                    id="birthYear"
                    onChange={change}
                  />
                </div>
                <span>/</span>
                <div className="box">
                  <input
                    type="text"
                    maxLength="2"
                    id="birthMonth"
                    onChange={change}
                  />
                </div>
                <span>/</span>
                <div className="box">
                  <input
                    type="text"
                    maxLength="2"
                    id="birthDay"
                    onChange={change}
                  />
                </div>
              </div>
            </div>
            <div className={birth.birthClass}>
              알맞은 생년월일을 입력해주세요
            </div>
            <div className="agree mt15">
              선택약관 동의{" "}
              <div>
                <input type="checkbox" name="선택약관동의" id="agreeChoice" />
                개인정보처리방침<strong className="choice">(선택)</strong>
                <strong className="view">
                  약관보기<i className="fas fa-chevron-right"></i>
                </strong>
              </div>
            </div>
          </div>
          <div className="title">
            <span className="tit">이용약관 동의*</span>
            <p className="description">
              선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
              이용할 수 있습니다.
            </p>
          </div>
          <div className="agreeUse">
            <div className="agreeAll">
              <input
                type="checkbox"
                onClick={() => {
                  if (agreeCh.SMS && agreeCh.mail) {
                    setAgreeCh({ SMS: false, mail: false });
                  } else {
                    setAgreeCh({ SMS: true, mail: true });
                  }
                }}
                checked={agreeCh.SMS && agreeCh.mail}
                readOnly
                name=""
              />
              무료배송, 할인쿠폰 등 혜택/정보 수신
              <strong className="choice">(선택)</strong>
            </div>
            <div className="agreeChoice">
              <div>
                <input
                  type="checkbox"
                  name=""
                  readOnly
                  onClick={() => {
                    setAgreeCh({ ...agreeCh, SMS: !agreeCh.SMS });
                  }}
                  checked={agreeCh.SMS}
                />
                SMS
              </div>
              <div>
                <input
                  type="checkbox"
                  readOnly
                  name=""
                  onClick={() => {
                    setAgreeCh({ ...agreeCh, mail: !agreeCh.mail });
                  }}
                  checked={agreeCh.mail}
                />
                이메일
              </div>
            </div>
        </div> */}
        <div className="btnBox">
            <a href="" className="secession"id="secession" onClick={change}>탈퇴하기</a>
            <a href="" className="submit" id="submit" onClick={change}>회원정보수정</a>
        </div></>)}
</InfoBox>);
}}}}

export default MyInfoChng;
