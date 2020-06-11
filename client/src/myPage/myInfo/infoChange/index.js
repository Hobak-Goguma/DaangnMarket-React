import React, { useState , useCallback } from "react";
import styled from "styled-components";
import MyLayout from "../../MypageLayout";
import Gender from "./components/Gender";
import Birth from "./components/Birth";
import Modify from "./components/Modify";

const ChangeLayout = styled.div`
  width: calc(100% - 250px);
  margin-left: 250px;
  margin-top: 200px;
  .title {
    position: relative;
    border-bottom: 3px solid #ff8a3d;
    padding-bottom: 15px;
    span.tit {
      display: inline;
      font-size: 26px;
      margin-right: 15px;
    }
  }
  .infoChange{
    position:relative;
    margin :20px 0 50px 0 ;
    border:1px solid #ccc;
    width: 500px;
    margin: 30px auto 50px;
    border-radius:10px;
    box-sizing:border-box;
    padding :30px 20px 100px; 
    .infoTit{
      font-size: 10px;
      margin-bottom:20px;
    }
    .btnFinish{
      width: 100px;
      height:50px;
      border-radius:10px;
      background-color:#ff8a3d;
      color:white;
      line-height:50px;
      text-align:center;
      cursor:pointer;
      position:absolute;
      bottom: 20px;
      left:50%;
      transform:translateX(-50%)
    }
  }
`;

const Changelayout = ({ location, history }) => {
  const choose = "내 정보 보기";
  let { state: temp } = location;
  const { state, user } = temp;
  const [chClass, setClass] = useState({
    modifyon : false,
    state : state,
    key : "",
    value : ""
  });
  let classname, changeValue;
  if(chClass.key === ""){
    switch (state) {
      case "nick_name":
        setClass({
          ...chClass,
          key : "닉네임",
          value : user.nick_name
        });
        break;

      case "tel":
        setClass({
          ...chClass,
          key : "전화번호",
          value : user.tel
        });
        break;
    
      case "addr":
        setClass({
          ...chClass,
          key : "주소",
          value : user.addr
        });
        break;
      
      case "gender":
        setClass({
          ...chClass,
          key : "성별",
          value : user.gender
        });
        break;
    
      case "birth":
        setClass({
          ...chClass,
          key : "생년월일",
          value : user.birth
        });
        break;
        
      default:
        history.goBack();
        break;
    }
  } 
  const changeModifyOn = useCallback( () =>{
    setClass({
      ...chClass,
      modifyon:true
    });    
    console.log(chClass);
  },[chClass]);
  const changeModifyOff = useCallback( () =>{
    setClass({
      ...chClass,
      modifyon:false
    });    
  },[chClass]);
  const changeClassValue = useCallback( (value) =>{
    setClass({
      ...chClass,
      value:value
    });    
  },[chClass]);




  /*
  
    ,pk: 1,
    user_id: "root",
    name: "root",
    gender: "MALE",
    birth:"19200101",
    email: "sunwoo@wonsang.ggum",
    nick_name: "루트",
    tel: "010-1234-1234",
    add: ["서울특별시 영등포구 짜장동"]
  
  */
  return (
    <>
      <MyLayout history={history} choose={choose}>
        <ChangeLayout>
          <div className="title">
            <span className="tit">{chClass.key}</span>
          </div>
          <div className="infoChange">
            <div className="infoTit">{chClass.key}변경</div>
            
          {state==="nick_name"? <></>:
          state==="tel"? <></>:
          state==="addr"? <></>:
          state==="gender"? <Gender changeValue={chClass.value} change={changeClassValue}></Gender>:
          state==="birth"? <Birth changeValue={chClass.value} change={changeClassValue}></Birth>:
          history.goBack()
          }
            <div className="btnFinish" onClick={()=>changeModifyOn()}>
              <i className="fas fa-pen"></i>
            </div>
          </div>
        </ChangeLayout>
      </MyLayout>
      {chClass.modifyon? <Modify></Modify>:<></>}
    </>
  );
};

export default Changelayout;
