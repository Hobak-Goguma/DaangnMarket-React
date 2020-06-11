import React from "react";
import styled from "styled-components";
//birth:"19200101",

const BirthDiv = styled.div`

`;


const Birth = ({changeValue:birth,change}) =>{
    let year="",month="",day="";
    for(let i in birth){
        if(i<4){
            year+=birth[i];
        }else if(i<6){
            month+=birth[i];
        }else{
            day += birth[i];
        }
    }
    
    return (<BirthDiv>
        {year}년 {month}월 {day}일
    </BirthDiv>);
}


export default Birth;