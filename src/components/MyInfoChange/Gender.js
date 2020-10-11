import React from "react";
import styled from "styled-components";
const GenderDiv = styled.div`
    .check{
        cursor:pointer;
        padding: 10px;
        display: inline-block;
        input{
            margin-right:10px;
        }
    }
`;
const Gender = ({changeValue,change}) =>{

    return <GenderDiv>
        <div className="check" onClick={()=>{
            change("MALE");
        }}>
            <input type="radio" checked={changeValue==="MALE"}/>남성
        </div>
        <br/>
        <div className="check" onClick={()=>{
            change("FEMALE");
        }}>
            <input type="radio" checked={changeValue==="FEMALE"}/>여성
        </div>
        <br/>
        <div className="check"onClick={()=>{
            change("");
        }}>
            <input type="radio" checked={changeValue===""}/>선택안함
        </div>
    </GenderDiv>;
}


export default Gender;